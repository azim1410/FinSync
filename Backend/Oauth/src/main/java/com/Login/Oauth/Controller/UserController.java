package com.Login.Oauth.Controller;


import com.Login.Oauth.Dto.*;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    private UserService userService;

    @PostMapping("/register")
    public UserDto addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/{userId}/add-friend/{friendId}")
    public UserDto addFriend(@PathVariable String userId, @PathVariable String friendId,@RequestParam String Token){
        return userService.addFriend(userId, friendId,Token);
    }

    @DeleteMapping("/{userId}/remove-friend/{friendId}")
    public UserDto removeFriend(@PathVariable String userId, @PathVariable String friendId,@RequestParam String Token) {
        return userService.removeFriend(userId, friendId,Token);
    }

    @GetMapping("/{userId}")
    public ResponseDto getUserById(@PathVariable String userId, @RequestParam String Token) {
        return userService.getUserById(userId,Token);
    }

    @PostMapping("/login")
    public jwtDto login(@RequestBody LoginDto loginDto){
        return userService.login(loginDto.getEmail(), loginDto.getPassword());
    }

    @GetMapping("/all-users")
    public ResponseEntity<List<AllUsersDto>> getAllUsers(@RequestParam String Token){
        return userService.getAllUsers(Token);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<AllUsersDto> getUserFromEmail(@PathVariable String email,@RequestParam String Token){
        return userService.getUserFromEmail(email,Token);
    }

    @PostMapping("/email/invitation")
    public ResponseEntity<String> inviteUser(@RequestBody InvitationDto invitationDto,@RequestParam String Token){
        return userService.inviteUser(invitationDto,Token);
    }
}
