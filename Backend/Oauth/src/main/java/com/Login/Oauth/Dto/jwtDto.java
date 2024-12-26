package com.Login.Oauth.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class jwtDto {
    private String message,status,data;
}
