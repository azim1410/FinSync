package com.Login.Oauth.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class AmountDto {
    private double amount;
    private String description;
    private String paidBy;
}
