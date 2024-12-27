package com.Login.Oauth.Exceptions.UserExceptions;

public class InvalidPassword extends RuntimeException{
    public InvalidPassword(String msg){
        super(msg);
    }
}
