package com.nafa.tiger.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nafa.tiger.entity.Activity;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.MemberService;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
public class MemberController {
	@Autowired
	private MemberService memberService;
	
	@GetMapping("/admin/allMembers")
	public ArrayList<User> getAllUsers(){
		return memberService.getAllUsers();
	}
	
	
	
	
	@DeleteMapping("/delete/{user_id}")
	public String deleteMember(@PathVariable("user_id") Long user_id) {
		memberService.deleteUser(user_id);
		return "Member successfully deleted";
	}
	
	@GetMapping("/admin/member/{user_id}")
	public User getMemberById(@PathVariable("user_id") Long user_id){
		return memberService.getUserById(user_id);
	}
	
	@GetMapping("/admin/member/firstname/{memberFirstName}")
	public ArrayList<User> getMemberByFirstNameContaining(@PathVariable("memberFirstName") String firstName){
		return memberService.getAllByFirstNameContaining(firstName);
	}
	
	@GetMapping("/admin/member/lastname/{memberLastName}")
	public ArrayList<User> getMemberByLastNameContaining(@PathVariable("memberLastName") String lastName){
		return memberService.getAllByLastNameContaining(lastName);
	}
	
	@GetMapping("/admin/member/email/{memberEmail}")
	public User getMemberByEmail(@PathVariable("memberEmail") String email){
		return memberService.getUserByEmail(email);
	}
	
	@GetMapping("/admin/member/firstname/{memberFirstName}/lastname/{memberLastName}")
	public ArrayList<User> getAllByFirstNameAndLastNameContaining(@PathVariable("memberFirstName") String firstName,@PathVariable("memberLastName") String lastName){
		return memberService.getAllByFirstNameAndLastNameContaining(firstName,lastName);
	}
//	@PostMapping("/user/{userId}/addactivities")
//	public User addActivity(@RequestBody Activity activity, @PathVariable("userId")Long userId) {
//		return memberService.addActivity(userId,activity);
//	}
	
	@GetMapping("admin/activity/{details}")
	public ArrayList<User> getMemberByActivity(@PathVariable("details") String details){
		return memberService.getByActivity(details);
	}
	@GetMapping("user/{userId}/activity")
	public ArrayList<Activity> getActivityById(@PathVariable("userId") Long userId){
		return memberService.getActivityById(userId);
	}
	
	@PutMapping("/user/{userId}/{groupId}")
	public User addUserToGroup(@PathVariable("userId") Long userId, @PathVariable("groupId") Long groupId){
		return memberService.addUserToGroup(userId,groupId);
	}
}
