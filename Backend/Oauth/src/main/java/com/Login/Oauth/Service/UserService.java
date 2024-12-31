package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.AllUsersDto;
import com.Login.Oauth.Dto.ResponseDto;
import com.Login.Oauth.Dto.UserDto;
import com.Login.Oauth.Dto.jwtDto;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtInvalid;
import com.Login.Oauth.Exceptions.UserExceptions.FriendNotFound;
import com.Login.Oauth.Exceptions.UserExceptions.InvalidPassword;
import com.Login.Oauth.Exceptions.UserExceptions.UserNotFound;
import com.Login.Oauth.Repo.UserRepo;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
@Service
public class UserService {

    private UserRepo userRepo;
    private ObjectMapper objectMapper;
    private EmailSenderService emailSenderService;

    public UserDto addUser(User user){
        BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
        String hashedPassword=bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        userRepo.save(user);
        try {
            emailSenderService.sendWelcomeEmail(user.getEmail());
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
        return UserDto.builder().message("User Added Successfully").status("200").build();
    }

    public UserDto addFriend(String userId, String friendId,String token) {
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        User user = userRepo.findById(userId).orElseThrow(() -> new UserNotFound("User not found"));
        User friend = userRepo.findById(friendId).orElseThrow(() -> new FriendNotFound("Friend not found"));

        user.getFriends()
                .add(User.builder().id(friend.getId())
                        .name(friend.getName())
                        .email(friend.getEmail())
                        .friends(new ArrayList<>())
                        .groups(new ArrayList<>())
                        .you_owe(0.0)
                        .you_are_owed(0.0)
                        .build());

        userRepo.save(user);

        return UserDto.builder().message("Friend added successfully!").status("200").build();
    }

    public UserDto removeFriend(String userId,String friendId,String token){
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        User user = userRepo.findById(userId).orElseThrow(() -> new UserNotFound("User not found"));
        User friend = userRepo.findById(friendId).orElseThrow(() -> new FriendNotFound("Friend not found"));

        user.getFriends().remove(friend);
        userRepo.save(user);

        return UserDto.builder().message("Friend removed successfully!").status("200").build();
    }

    public ResponseDto getUserById(String userId, String token){
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        User user=userRepo.findById(userId).orElseThrow(() -> new UserNotFound("User not found"));
        return objectMapper.convertValue(user, ResponseDto.class);
    }

    public jwtDto login(String email,String Password){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        User user=userRepo.findByEmail(email).orElseThrow(()->new UserNotFound("User not found"));
        if(!passwordEncoder.matches(Password, user.getPassword())) throw new InvalidPassword("Invalid password");
        return jwtDto.builder().message("User Login Success").status("200").data(JwtUtil.generateToken(user.getName(),user.getEmail())).id(user.getId()).build();
    }

    public ResponseEntity<List<AllUsersDto>> getAllUsers(String token){
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        List<User> users=userRepo.findAll();
        List<AllUsersDto>response=users.stream().map(user -> objectMapper.convertValue(user, AllUsersDto.class)).collect(Collectors.toList());
        return ResponseEntity.ok(response);
    }

    public ResponseEntity<AllUsersDto> getUserFromEmail(String email,String token){
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        User user=userRepo.findByEmail(email).orElseThrow(()->new UserNotFound("User not Found,Invite Him"));
        return ResponseEntity.ok(objectMapper.convertValue(user, AllUsersDto.class));
    }

    public Boolean validate(String token){
        return JwtUtil.validateToken(token).isEmpty();
    }

}
