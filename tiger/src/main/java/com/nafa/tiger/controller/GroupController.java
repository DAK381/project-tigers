package com.nafa.tiger.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.GroupService;

@RestController
public class GroupController {


	@Autowired
	private GroupService groupService;
	
	@PostMapping("/addgroup")
	public String addGroup(@RequestBody Group group) {
		return groupService.addGroup(group);
	}
	
	@GetMapping("/search/{groupId}")
	public Group getByGroupId(@PathVariable Long groupId) {
		return groupService.findByGroupId(groupId);
	}

	
	@GetMapping("/search/allgroup")
	public ArrayList<Group> getAllGroup(){
		return groupService.getAllGroup();
	}
	
	@GetMapping("/search/name/{groupName}")
	public ArrayList<Group> getGroupByNameContaining(@PathVariable("groupName") String groupName){
		return groupService.getGroupByNameContaining(groupName);
	}
	
   
//	@PostMapping("addMemberIngroup/{groupName}/{userName}")
//	public User addMemberToGroup(@PathVariable("userName") Long userId, @PathVariable("groupName") Long groupId){
//		return groupService.addUserToGroup(userId,groupId);
//	}
//	@PostMapping("/test")
//	public void test(@RequestParam Long userId, @RequestParam Long group) {
//		try {
//			groupService.addUserToGroup(userId, group);
//		} catch (Exception e) {
//			System.out.println(e.toString());
//		}
//	}
	
	
}
