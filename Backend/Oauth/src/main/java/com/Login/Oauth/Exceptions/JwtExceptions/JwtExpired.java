package com.Login.Oauth.Exceptions.JwtExceptions;

public class JwtExpired extends RuntimeException{
    public JwtExpired(String msg){
        super(msg);
    }
}
