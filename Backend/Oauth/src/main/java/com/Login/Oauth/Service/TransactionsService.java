package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.GroupDto;
import com.Login.Oauth.Dto.TransactionDto;
import com.Login.Oauth.Dto.UnequalAmountDto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Entity.Transactions;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.GroupExceptions.GroupNotFound;
import com.Login.Oauth.Repo.GroupRepo;
import com.Login.Oauth.Repo.TransactionRepo;
import com.Login.Oauth.Repo.UserRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.util.*;


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
                .payedBy(paidBy)
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

    public GroupDto addTransactionToGroupUnEqually(String groupId, UnequalAmountDto unequalAmountDto){
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new GroupNotFound("Group not found"));

        TransactionDto transaction = TransactionDto.builder()
                .transactionId(UUID.randomUUID().toString())
                .amount(unequalAmountDto.getAmount())
                .date(new Date())
                .description(unequalAmountDto.getDescription())
                .payedBy(unequalAmountDto.getPaidBy())
                .build();

        Map<String,Double>amountsMapping=unequalAmountDto.getAmounts();

        for(Map.Entry<String,Double>entry: amountsMapping.entrySet()){
            User user = userRepo.findById(entry.getKey()).orElseThrow(() -> new RuntimeException("User not found"));
            if(entry.getKey().equals(unequalAmountDto.getPaidBy())){
                user.setYou_are_owed(entry.getValue()+ user.getYou_are_owed());
                userRepo.save(user);
            }
            else {
                user.setYou_owe(user.getYou_owe() + entry.getValue());
                userRepo.save(user);
                Transactions transactions= Transactions.builder()
                        .from(user.getId())
                        .to(unequalAmountDto.getPaidBy())
                        .transactionId(transaction.getTransactionId())
                        .amount(entry.getValue())
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

        return GroupDto.builder().message("Transaction Added Succefully!").status("200").build();
    }

    public List<Transactions> getAllTransactionsFrom(String user1,String user2,String token){
        return transactionRepo.findTransactionsBetweenUsers(user1,user2);
    }
}
