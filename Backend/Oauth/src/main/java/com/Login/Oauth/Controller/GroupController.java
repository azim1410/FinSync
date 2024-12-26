package com.Login.Oauth.Controller;

import com.Login.Oauth.Dto.GroupDto;
import com.Login.Oauth.Dto.UserDto;
import com.Login.Oauth.Entity.Group;
import com.Login.Oauth.Service.GroupService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/group")
@AllArgsConstructor
@CrossOrigin
public class GroupController {

    private final GroupService groupService;

    @PostMapping("/create/{Id}")
    public GroupDto createGroup(@RequestBody Group group, @PathVariable String Id) {
        return groupService.createGroup(group,Id);
    }

    @PostMapping("/{groupId}/add-user/{userId}")
    public UserDto addUserToGroup(@PathVariable String groupId, @PathVariable String userId) {
        return groupService.addUserToGroup(userId, groupId);
    }

    @DeleteMapping("/{groupId}/remove-user/{userId}")
    public UserDto removeUserFromGroup(@PathVariable String groupId, @PathVariable String userId) {
        return groupService.removeUserFromGroup(userId, groupId);
    }

    @GetMapping("/{groupId}")
    public Group getGroupById(@PathVariable String groupId) {
        return groupService.getGroupById(groupId);
    }
}
