package com.Login.Oauth.Exceptions.JwtExceptions;

public class JwtInvalid extends RuntimeException{
    public JwtInvalid(String msg){
        super(msg);
    }
}
