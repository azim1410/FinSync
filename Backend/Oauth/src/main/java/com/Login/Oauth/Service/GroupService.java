package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.GroupDto;
import com.Login.Oauth.Dto.TransactionDto;
import com.Login.Oauth.Dto.UserDto;
import com.Login.Oauth.Dto.jwtDto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Exceptions.GroupExceptions.GroupNotFound;
import com.Login.Oauth.Exceptions.GroupExceptions.UserAlreadyInGorupException;
import com.Login.Oauth.Exceptions.JwtExceptions.JwtInvalid;
import com.Login.Oauth.Exceptions.UserExceptions.Nonsense;
import com.Login.Oauth.Exceptions.UserExceptions.UserNotFound;
import com.Login.Oauth.Repo.GroupRepo;
import com.Login.Oauth.Repo.UserRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.pulsar.PulsarProperties;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Service
@Data
@AllArgsConstructor
public class GroupService {
    private GroupRepo groupRepo;
    private UserRepo userRepo;

    public jwtDto createGroup(Group group, String Id, String token) {
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        User user = userRepo.findById(Id)
                .orElseThrow(() -> new UserNotFound("User not found"));
        group.setCreatedBy(user.getId());
        groupRepo.save(group);
        user.getGroups().add(group);
        userRepo.save(user);

        return jwtDto.builder().message("created").status("200").id(group.getId()).build();
    }

    public UserDto addUserToGroup(String userId, String groupId,String token) {
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new GroupNotFound("Group not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new UserNotFound("User not found"));
        if(userId.equals(group.getCreatedBy())) throw new Nonsense("Group is Owner is a member by default");
        if (group.getMemberIds().stream().anyMatch(memberId -> memberId.equals(userId))) {
            throw new UserAlreadyInGorupException("User is already in the group");
        }
        group.getMemberIds().add(userId);
        groupRepo.save(group);

        user.getGroups().add(group);
        userRepo.save(user);

        return UserDto.builder().message("User added to group successfully!").status("200").build();
    }

    public UserDto removeUserFromGroup(String userId, String groupId, String token) {
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new GroupNotFound("Group not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new UserNotFound("User not found"));
        if(userId.equals(group.getCreatedBy())) throw new Nonsense("Group is Owner cannot be removed");
        group.getMemberIds().remove(userId);
        groupRepo.save(group);

        List<Group>completeList= user.getGroups();
        List<Group>newList=new ArrayList<>();

        for(Group g:completeList){
            if(!g.getId().equals(groupId)) newList.add(g);
        }

        user.setGroups(newList);

        userRepo.save(user);

        return UserDto.builder().message("User removed from group successfully!").status("200").build();
    }

    public Group getGroupById(String groupId ,String token) {
        if(validate(token)) throw new JwtInvalid("Token Invalid");
        return groupRepo.findById(groupId).orElseThrow(() -> new GroupNotFound("Group not found"));
    }

    public GroupDto addTransactionToGroup(String groupId, double amount,String token,String description){
        if(validate(token)) throw new JwtInvalid("Token Invalid");
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

    public Boolean validate(String token){
        return JwtUtil.validateToken(token).isEmpty();
    }
}
