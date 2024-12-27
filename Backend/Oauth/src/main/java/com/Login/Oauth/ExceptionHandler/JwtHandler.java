package com.Login.Oauth.ExceptionHandler;

import com.Login.Oauth.Dto.ExceptionDto;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtExpired;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtInvalid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class JwtHandler {

    @ExceptionHandler(JwtExpired.class)
    public ResponseEntity<ExceptionDto> handleJwtExpired(JwtExpired ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("408")
                .build(), HttpStatus.REQUEST_TIMEOUT);
    }

    @ExceptionHandler(JwtInvalid.class)
    public ResponseEntity<ExceptionDto> handleJwtInvalid(JwtInvalid ex){
        return new ResponseEntity<>(ExceptionDto.builder().message(ex.getMessage())
                .status("400")
                .build(), HttpStatus.BAD_REQUEST);
    }
}
