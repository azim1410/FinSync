package com.Login.Oauth.ExceptionHandler;

import com.Login.Oauth.Dto.ExceptionDto;
import com.Login.Oauth.Exceptions.GroupExceptions.GroupNotFound;
import com.Login.Oauth.Exceptions.GroupExceptions.UserAlreadyInGorupException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GroupHandler {
    @ExceptionHandler(GroupNotFound.class)
    public ResponseEntity<ExceptionDto> handleGroupNotFound(GroupNotFound ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("404").build(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserAlreadyInGorupException.class)
    public ResponseEntity<ExceptionDto> handleUserAlreadInTheGroupException(UserAlreadyInGorupException ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("404").build(), HttpStatus.FOUND);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ExceptionDto> handleRuntimeException(RuntimeException ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("404").build(), HttpStatus.LENGTH_REQUIRED);
    }
}
