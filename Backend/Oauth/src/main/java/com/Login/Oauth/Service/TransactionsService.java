package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.GroupDto;
import com.Login.Oauth.Dto.TransactionDto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Entity.Transactions;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.GroupExceptions.GroupNotFound;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtInvalid;
import com.Login.Oauth.Repo.GroupRepo;
import com.Login.Oauth.Repo.TransactionRepo;
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
    private TransactionRepo transactionRepo;

    public GroupDto addTransactionToGroupEqually(String groupId, double amount, String description,String paidBy){
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new GroupNotFound("Group not found"));
        List<String> memberIds = group.getMemberIds();
        memberIds.add(group.getCreatedBy());

        if (memberIds.isEmpty()) {
            throw new RuntimeException("No members in the group to distribute the amount.");
        }

        TransactionDto transaction = TransactionDto.builder()
                .transactionId(UUID.randomUUID().toString())
                .amount(amount)
                .date(new Date())
                .description(description)
                .build();

        double share = amount / (memberIds.size());
        for (String memberId : memberIds) {
            User user = userRepo.findById(memberId).orElseThrow(() -> new RuntimeException("User not found"));
            if(memberId.equals(paidBy)){
                user.setYou_are_owed(amount-share+ user.getYou_are_owed());
                userRepo.save(user);
            }
            else {
                user.setYou_owe(user.getYou_owe() + share);
                userRepo.save(user);
                Transactions transactions= Transactions.builder()
                        .from(user.getId())
                        .to(paidBy)
                        .transactionId(transaction.getTransactionId())
                        .amount(share)
                        .status(false)
                        .groupId(groupId)
                        .build();
                transactionRepo.save(transactions);
            }
        }

        if (group.getTransactions() == null) {
            group.setTransactions(new ArrayList<>());
        }

        group.getTransactions().add(transaction);
        groupRepo.save(group);
        return GroupDto.builder().message("Transaction created and amount distributed successfully!").status("200").build();
    }
}
