package com.Login.Oauth.Dto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class ResponseDto {
    public String id;
    public String email;
    public String name;
    public double you_owe;
    public double you_are_owed;
    List<User> friends=new ArrayList<>();
    List<Group> groups=new ArrayList<>();
}
