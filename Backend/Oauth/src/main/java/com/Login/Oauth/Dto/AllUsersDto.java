package com.Login.Oauth.Dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class AllUsersDto {
    public String id;
    public String email;
    public String name;
    @JsonIgnore // Prevent serialization of this field
    private String password;
}
