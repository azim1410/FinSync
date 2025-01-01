package com.Login.Oauth.Exceptions.UserExceptions;

public class DuplicateEntry extends RuntimeException{
    public DuplicateEntry(String msg){
        super(msg);
    }
}
