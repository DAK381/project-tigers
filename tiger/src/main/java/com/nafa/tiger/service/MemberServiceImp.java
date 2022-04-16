package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import javax.transaction.Transactional;

import com.nafa.tiger.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.PendingGroupRequest;
import com.nafa.tiger.entity.User;

import ch.qos.logback.classic.Logger;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class MemberServiceImp implements MemberService {
	@Autowired
	private MemberRepositrory memberRepository;

	@Autowired
	private VerificationTokenRepository verificationTokenRepository;
	
	
	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private GroupService groupService;

	@Autowired
	private AddGroupRequestRepository  addGroupRequestRepository;
	@Override
	public void deleteUser(Long userId) {
		verificationTokenRepository.deleteByUserId(1L);
		memberRepository.deleteById(userId);
	}

	@Override
	public User getUserByEmail(String email) {
		return memberRepository.findByEmailIgnoreCase(email);
	}

	@Override
	public User getUserById(Long userId) {
		return memberRepository.findById(userId).get();
	}
	
	@Override
	public ArrayList<User> getAllByFirstNameContaining(String firstName) {
		return memberRepository.findByFirstNameIgnoreCaseContaining(firstName);
	}

	@Override
	public ArrayList<User> getAllByLastNameContaining(String lastName) {
		return memberRepository.findByLastNameIgnoreCaseContaining(lastName);
	}

	@Override
	public ArrayList<User> getAllByFirstNameAndLastNameContaining(String firstName, String lastName) {
		return memberRepository.findAllByFristNameAndLastNameContaining(firstName,lastName);
	}
	

//	@Override
//	public ArrayList<User> getAllByGraduatedYear(int graduatedYear) 
//	{
//		return memberRepository.findAllByGarduatedYear(graduatedYear);
//	}
//	

	@Override
	public ArrayList<User> getAllUsers() {
		// TODO Auto-generated method stub
		return (ArrayList<User>) memberRepository.findAll();
	}

//	@Override
//	public User addActivity(Long UserId,Activity activity) {
//		User user = memberRepository.findById(UserId).get();
//		Activity newActivity = activityRepository.save(activity);
//		newActivity.setUser(user);
//		return user;
//	}

	@Override
	public User addUserToGroup(Long userId, Long groupId) {
		User user = memberRepository.findById(userId).get();
		//System.out.print(userId);
		System.out.print(groupId);
		Group group = groupService.findByGroupId(groupId);
		System.out.print(group);
		user.getUserGroup().add(group);
		//group.getGroupUser().add(user);
		return new User();
	}

	@Override
	public Collection<Group> removeUserFromGroup(Long userId, Long groupId) {
		User fetchedUser = memberRepository.findById(userId).get();
		Group fetchedGroup = groupRepository.findById(groupId).get();	
		fetchedUser.getUserGroup().remove(fetchedGroup);
		return fetchedUser.getUserGroup();
	}

	@Override
	public PendingGroupRequest requestToaddGroup(String groupName, Long userId) {
		User user = memberRepository.findById(userId).get();
		PendingGroupRequest request = new PendingGroupRequest(groupName, user);
		addGroupRequestRepository.save(request);
		return request;
		
	}

	
	}
