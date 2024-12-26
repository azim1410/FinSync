package com.Login.Oauth.Controller;


import com.Login.Oauth.Dto.LoginDto;
import com.Login.Oauth.Dto.UserDto;
import com.Login.Oauth.Dto.jwtDto;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Service.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

@Data
@AllArgsConstructor
@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @PostMapping("/register")
    public UserDto addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/{userId}/add-friend/{friendId}")
    public UserDto addFriend(@PathVariable String userId, @PathVariable String friendId) {
        return userService.addFriend(userId, friendId);
    }

    @DeleteMapping("/{userId}/remove-friend/{friendId}")
    public UserDto removeFriend(@PathVariable String userId, @PathVariable String friendId) {
        return userService.removeFriend(userId, friendId);
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable String userId) {
        return userService.getUserById(userId);
    }

    @PostMapping("/login")
    public jwtDto login(@RequestBody LoginDto loginDto){
        return userService.login(loginDto.getEmail(), loginDto.getPassword());
    }
}
