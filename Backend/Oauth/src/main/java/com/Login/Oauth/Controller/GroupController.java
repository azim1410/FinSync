package com.Login.Oauth.Controller;

import com.Login.Oauth.Dto.*;
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
    public jwtDto createGroup(@RequestBody Group group, @PathVariable String Id, @RequestParam String Token) {
        return groupService.createGroup(group,Id,Token);
    }

    @PostMapping("/{groupId}/add-user/{userId}")
    public UserDto addUserToGroup(@PathVariable String groupId, @PathVariable String userId,@RequestParam String Token) {
        return groupService.addUserToGroup(userId, groupId,Token);
    }

    @DeleteMapping("/{groupId}/remove-user/{userId}")
    public UserDto removeUserFromGroup(@PathVariable String groupId, @PathVariable String userId,@RequestParam String Token) {
        return groupService.removeUserFromGroup(userId, groupId,Token);
    }

    @GetMapping("/{groupId}")
    public Group getGroupById(@PathVariable String groupId,@RequestParam String Token) {
        return groupService.getGroupById(groupId,Token);
    }

    @PostMapping("/{groupId}/transaction/equally")
    public GroupDto addTransactionToGroup(@PathVariable String groupId, @RequestParam String Token, @RequestBody AmountDto amountdto){
        return groupService.addTransactionToGroupEqually(groupId, amountdto.getAmount(),Token, amountdto.getDescription(),amountdto.getPaidBy());
    }

    @PostMapping("/{groupId}/transaction/unequally")
    public GroupDto addTransactionToGroupUnequally(@PathVariable String groupId, @RequestParam String Token, @RequestBody UnequalAmountDto unequalAmountDto){
        return groupService.addTransactionToGroupUnEqually(groupId,Token,unequalAmountDto);
    }

}
