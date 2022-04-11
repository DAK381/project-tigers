package com.nafa.tiger.controller;

import java.util.ArrayList;

import com.nafa.tiger.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import com.nafa.tiger.entity.PendingGroupRequest;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.AddGroupRequestService;
import com.nafa.tiger.service.MemberService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private MemberService memberService;

	@Autowired
	private AddGroupRequestService addGroupRequestService;

	@Autowired
	private EmailSenderService emailSenderService;

	@PostMapping("/sendemail")
	public void sendEmail(){
		emailSenderService.sendSimpleEmail(""+"swastikabasnet01@gmail.com",
				"token:adds","Verification Token");
	}

	

	@CrossOrigin(origins = "*")
	@GetMapping("/allMembers")
	public ArrayList<User> getAllUsers() {
		return memberService.getAllUsers();
	}


	@DeleteMapping("/delete/{user_id}")
	public String deleteMember(@PathVariable("user_id") Long user_id) {
		memberService.deleteUser(user_id);
		return "Member successfully deleted";
	}

	@GetMapping("/member/{user_id}")
	public User getMemberById(@PathVariable("user_id") Long user_id) {
		return memberService.getUserById(user_id);
	}

	@CrossOrigin("*")
	@GetMapping("/member/firstname/{memberFirstName}")
	public ArrayList<User> getMemberByFirstNameContaining(@PathVariable("memberFirstName") String firstName) {
		return memberService.getAllByFirstNameContaining(firstName);
	}

	@CrossOrigin("*")
	@GetMapping("/member/lastname/{memberLastName}")
	public ArrayList<User> getMemberByLastNameContaining(@PathVariable("memberLastName") String lastName) {
		return memberService.getAllByLastNameContaining(lastName);
	}

	@GetMapping("/member/email/{memberEmail}")
	public User getMemberByEmail(@PathVariable("memberEmail") String email) {
		return memberService.getUserByEmail(email);
	}

	@GetMapping("/member/firstname/{memberFirstName}/lastname/{memberLastName}")
	public ArrayList<User> getAllByFirstNameAndLastNameContaining(@PathVariable("memberFirstName") String firstName, @PathVariable("memberLastName") String lastName) {
		return memberService.getAllByFirstNameAndLastNameContaining(firstName, lastName);
	}

	@GetMapping("/getAllRequest")
	public ArrayList<PendingGroupRequest> getAllRequest() {
		return addGroupRequestService.getAllRequests();
	}

	@PutMapping("/responseToRequest/{requestId}/{response}")
	public String responseToAddGroup(@PathVariable("requestId") Long requestId, @PathVariable("response") Boolean response) {
		return addGroupRequestService.responseToAddGroup(requestId, response);
	}
}

