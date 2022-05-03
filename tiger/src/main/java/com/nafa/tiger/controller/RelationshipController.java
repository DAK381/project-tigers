package com.nafa.tiger.controller;

import com.nafa.tiger.entity.UserRelationship;
import com.nafa.tiger.service.MemberService;
import com.nafa.tiger.service.RelationshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@CrossOrigin(origins ="*")
public class RelationshipController {
    @Autowired
    private RelationshipService relationshipService;
    @Autowired
    private MemberService memberService;


    @PostMapping("relationship/{relationof}/{relation}/{relatedTO}")
    public String addRelationship(@PathVariable("relationof")Long user1Id,@PathVariable("relation")String relation,@PathVariable("relatedTO")Long user2Id){
        return relationshipService.addRelationship(user1Id,relation,user2Id);
    }

    @GetMapping("getallRelationship/{user_id}")
    Collection<UserRelationship> getRelationship(@PathVariable("user_id") Long userId){
        return memberService.getRelationship(userId);
    }
    @PutMapping("removeRelationship/{userId1}/with/{userId2}")
    String removeRelatonship(@PathVariable("userId1") Long userId1, @PathVariable("userId2") Long userId2){
        return relationshipService.removeRelationship(userId1,userId2);
    }
}
