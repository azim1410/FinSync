package com.Login.Oauth.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.Map;


@Data
@Builder
@AllArgsConstructor
public class UnequalAmountDto {
    private double amount;
    private String description;
    private String paidBy;
    private Map<String,Double>amounts;
}
