package com.nafa.tiger.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Enumeration;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nafa.tiger.entity.UserRelationship;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.PendingGroupRequest;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.MemberService;

@RestController
@CrossOrigin(origins ="*")
public class
MemberController {
	@Autowired
	private MemberService memberService;
//	@PostMapping("/user/{userId}/addactivities")
//	public User addActivity(@RequestBody Activity activity, @PathVariable("userId")Long userId) {
//		return memberService.addActivity(userId,activity);
//	}

	@PutMapping("/addUserToGroup/{groupId}/{userId}")
	public User addUserToGroup(@PathVariable("groupId") Long groupId,@PathVariable("userId") Long userId){
		return memberService.addUserToGroup(userId,groupId);
	}
	
	@DeleteMapping("/user/{userId}/remove/{groupId}")
	public Collection<Group> removeUserFromGroup(@PathVariable("userId") Long userId, @PathVariable("groupId") Long groupId){
		return memberService.removeUserFromGroup(userId,groupId);
	}
	
	@PostMapping("/request/{groupName}/{userId}")
	public PendingGroupRequest requestToaddGroup(@PathVariable("groupName") String groupName, @PathVariable("userId")Long userId) {
		return memberService.requestToaddGroup(groupName,userId);
	}

	@PutMapping("/updateUserGroups/{userId}")
	public void removeUserFromGroup(HttpServletRequest request, HttpServletResponse response, @PathVariable("userId") Long userId){

		Enumeration<String> headers = request.getParameterNames();

		while(headers.hasMoreElements()){
			String header = headers.nextElement();
			String temp = request.getParameter(header);
			Long groupId = Long.parseLong(temp);

			if(header.equals("add")){
				memberService.addUserToGroup(userId,groupId);
			}

			if(header.equals("remove")){
				memberService.removeUserFromGroup(userId,groupId);
			}
		}
	}


}
