package com.Login.Oauth.Service;

import com.Login.Oauth.Dto.GroupDto;
import com.Login.Oauth.Dto.UserDto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Entity.User;
import com.Login.Oauth.Repo.GroupRepo;
import com.Login.Oauth.Repo.UserRepo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Data
@AllArgsConstructor
public class GroupService {
    private GroupRepo groupRepo;
    private UserRepo userRepo;

    public GroupDto createGroup(Group group, String Id) {
        User user = userRepo.findById(Id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        group.setCreatedBy(user.getId());
        groupRepo.save(group);
        user.getGroups().add(group);
        userRepo.save(user);

        return GroupDto.builder().message("created").status("200").build();
    }

    public UserDto addUserToGroup(String userId, String groupId) {
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new RuntimeException("Group not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

        group.getMemberIds().add(userId);
        groupRepo.save(group);

        user.getGroups().add(group);
        userRepo.save(user);

        return UserDto.builder().message("User added to group successfully!").status("200").build();
    }

    public UserDto removeUserFromGroup(String userId, String groupId) {
        Group group = groupRepo.findById(groupId).orElseThrow(() -> new RuntimeException("Group not found"));
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

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

    public Group getGroupById(String groupId) {
        return groupRepo.findById(groupId).orElseThrow(() -> new RuntimeException("Group not found"));
    }
}
