package com.Login.Oauth.Dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class InvitationDto {
    private String from_userName,to_email;
}
