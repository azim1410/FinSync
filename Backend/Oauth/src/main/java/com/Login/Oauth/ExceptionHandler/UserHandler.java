package com.Login.Oauth.ExceptionHandler;

import com.Login.Oauth.Dto.ExceptionDto;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.UserExceptions.FriendNotFound;
import com.Login.Oauth.Exceptions.UserExceptions.InvalidPassword;
import com.Login.Oauth.Exceptions.UserExceptions.UserNotFound;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserHandler{
    @ExceptionHandler(UserNotFound.class)
    public ResponseEntity<ExceptionDto> handleUserNotFound(UserNotFound ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("404")
                .build(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(FriendNotFound.class)
    public ResponseEntity<ExceptionDto> handleFriendNotFound(FriendNotFound ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("404")
                .build(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(InvalidPassword.class)
    public ResponseEntity<ExceptionDto> handleInvalidPassword(InvalidPassword ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("404")
                .build(), HttpStatus.NOT_FOUND);
    }
}
