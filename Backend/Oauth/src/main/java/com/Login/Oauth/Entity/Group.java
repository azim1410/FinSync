package com.Login.Oauth.Entity;

import com.Login.Oauth.Dto.TransactionDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "groups")
public class Group {
    @Id
    private String id;
    private String name;
    private String CreatedBy;
    private List<String> memberIds=new ArrayList<>();
    private List<TransactionDto> transactions=new ArrayList<>();
}
