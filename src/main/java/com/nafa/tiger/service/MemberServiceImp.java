package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Activity;
import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.ActivityRepository;
import com.nafa.tiger.repository.GroupRepository;
import com.nafa.tiger.repository.MemberRepositrory;

import ch.qos.logback.classic.Logger;
import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class MemberServiceImp implements MemberService {
	@Autowired
	private MemberRepositrory memberRepository;
	@Autowired
	private ActivityRepository activityRepository;
	
	@Autowired
	private GroupRepository groupRepository;
	


	@Override
	public void deleteUser(Long userId) {
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
	public ArrayList<User> getByActivity(String details) {
		ArrayList<Long> userIdarray = activityRepository.findAllByDetailId(details);
		return (ArrayList<User>) memberRepository.findAllById(userIdarray);
	
	}

	@Override
	public ArrayList<Activity> getActivityById(Long userId) {
		return activityRepository.findAllByMemberId(userId);
	}

	@Override
	public User addUserToGroup(Long userId, Long groupId) {
		User user = memberRepository.findById(userId).get();
		Group group = groupRepository.findById(groupId).get();
//		group.getUserGroup().add(user);
//		group.addMember(user);
		user.getUsgroup().add(group);
		return user;
	}


	
	}
	

