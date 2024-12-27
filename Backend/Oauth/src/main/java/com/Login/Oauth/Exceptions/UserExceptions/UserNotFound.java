package com.Login.Oauth.Exceptions.UserExceptions;

public class UserNotFound extends RuntimeException{
    public UserNotFound(String msg){
        super(msg);
    }
}
