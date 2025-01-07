package com.Login.Oauth.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
@AllArgsConstructor
@Builder
public class Transactions {
    @Id
    private String id;
    private String from,to,transactionId;
    private Double amount;
    private Boolean status;
    private String groupId;
}
