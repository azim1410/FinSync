package com.Login.Oauth.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Data
@Builder
@AllArgsConstructor
public class TransactionDto {
    private String transactionId;
    private double amount;
    private Date date;
    private String description;
    private String payedBy;
    private Map<String,Double> amountsPerPerson;
}
