package com.Login.Oauth.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection ="user")
public class User {
    @Id
    public String id;
    public String email;
    public String name;
    public String password;
    @Builder.Default
    public double you_owe=0.0;
    @Builder.Default
    public double you_are_owed=0.0;

    List<User> friends=new ArrayList<>();

    @DBRef
    List<Group> groups=new ArrayList<>();
}
