package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.GroupDto;
import com.Login.Oauth.Dto.TransactionDto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.GroupExceptions.GroupNotFound;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtInvalid;
import com.Login.Oauth.Repo.GroupRepo;
import com.Login.Oauth.Repo.UserRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;


@Data
@Service
@AllArgsConstructor
public class TransactionsService {
    private UserRepo userRepo;
    private GroupRepo groupRepo;

    public GroupDto addTransactionToGroupByOwner(String groupId, double amount, String description){
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new GroupNotFound("Group not found"));
        List<String> memberIds = group.getMemberIds();

        if (memberIds.isEmpty()) {
            throw new RuntimeException("No members in the group to distribute the amount.");
        }
        double share = amount / (memberIds.size()+1);
        for (String memberId : memberIds) {
            User user = userRepo.findById(memberId).orElseThrow(() -> new RuntimeException("User not found"));
            user.setYou_owe(user.getYou_owe() + share);
            userRepo.save(user);
        }

        User user=userRepo.findById(group.getCreatedBy()).get();
        user.setYou_are_owed(amount-share+ user.getYou_are_owed());
        userRepo.save(user);

        TransactionDto transaction = TransactionDto.builder()
                .transactionId(UUID.randomUUID().toString())
                .amount(amount)
                .date(new Date())
                .description(description)
                .build();

        if (group.getTransactions() == null) {
            group.setTransactions(new ArrayList<>());
        }

        group.getTransactions().add(transaction);
        groupRepo.save(group);
        return GroupDto.builder().message("Transaction created and amount distributed successfully!").status("200").build();
    }
}
