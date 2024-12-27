package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.UserDto;
import com.Login.Oauth.Dto.jwtDto;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtInvalid;
import com.Login.Oauth.Exceptions.UserExceptions.FriendNotFound;
import com.Login.Oauth.Exceptions.UserExceptions.InvalidPassword;
import com.Login.Oauth.Exceptions.UserExceptions.UserNotFound;
import com.Login.Oauth.Repo.UserRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Data
@AllArgsConstructor
@Service
public class UserService {

    private UserRepo userRepo;

    public UserDto addUser(User user){
        BCryptPasswordEncoder bCryptPasswordEncoder=new BCryptPasswordEncoder();
        String hashedPassword=bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        userRepo.save(user);
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
                        .build());

        System.out.println(user);
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

    public User getUserById(String userId,String token){
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        return userRepo.findById(userId).orElseThrow(() -> new UserNotFound("User not found"));
    }

    public jwtDto login(String email,String Password){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        User user=userRepo.findByEmail(email).orElseThrow(()->new UserNotFound("User not found"));
        if(!passwordEncoder.matches(Password, user.getPassword())) throw new InvalidPassword("Invalid password");
        return jwtDto.builder().message("User Login Success").status("200").data(JwtUtil.generateToken(user.getName(),user.getEmail())).build();
    }

    public Boolean validate(String token){
        return JwtUtil.validateToken(token).isEmpty();
    }

}
