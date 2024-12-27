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
    public User getUserById(@PathVariable String userId,@RequestParam String Token) {
        return userService.getUserById(userId,Token);
    }

    @PostMapping("/login")
    public jwtDto login(@RequestBody LoginDto loginDto){
        return userService.login(loginDto.getEmail(), loginDto.getPassword());
    }
}
