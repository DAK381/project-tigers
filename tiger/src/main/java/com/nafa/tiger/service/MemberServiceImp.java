package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Optional;

import javax.transaction.Transactional;

import com.nafa.tiger.entity.*;
import com.nafa.tiger.exception.ResourceNotFoundException;
import com.nafa.tiger.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
		verificationTokenRepository.deleteAllByIdInBatch(Collections.singleton(userId));
		memberRepository.deleteById(userId);
	}

	@Override
	public User getUserByEmail(String email) {
		return memberRepository.findByEmailIgnoreCase(email);
	}

	@Override
	public User getUserById(Long userId) {
		return memberRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
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
    public User update(Long user_id,User user) {
        User updatedUser = memberRepository.findById(user_id).get();

        if (user.getFirstName() != null){
        	updatedUser.setFirstName(user.getFirstName());
        }
        if (user.getLastName() != null){
        	updatedUser.setLastName(user.getLastName());
        }
        
        if (user.getMaidenName() != null){
        	updatedUser.setMaidenName(user.getMaidenName());
        }
        
        if (user.getMaidenName() != null){
        	updatedUser.setMaidenName(user.getMaidenName());
        }
        
        if (user.getMaidenName() != null){
        	updatedUser.setMaidenName(user.getMaidenName());
        }
        
        if (user.getAddress() != null){
        	updatedUser.setAddress(user.getAddress());
        }
        
        if (user.getMembership() != null){
        	updatedUser.setMembership(user.getMembership());
        }
        
        if (user.getPhone() != null){
        	updatedUser.setPhone(user.getPhone());
        }

//        if(event.getStartTime() != null){
//            updatedEvent.setStartTime(event.getStartTime());
//        }
//        if(event.getEndTime()!=null){
//            updatedEvent.setEndTime(event.getEndTime());
//        }
//        
//        if(event.getPaymentAmount()!=null){
//            updatedEvent.setPaymentAmount(event.getPaymentAmount());
//        }
//        
//        if(event.getEventLocation()!=null){
//            updatedEvent.setEventLocation(event.getEventLocation());
//        }
        return updatedUser;
    }

	@Override
	public Collection<UserRelationship> getRelationship(Long userId) {
		User user = memberRepository.findById(userId).get();
		return user.getRelationOfUser();
	}

//	@Override
//	public ArrayList<User> getAllByGraduatedYear(int graduatedYear) 
//	{
//		return memberRepository.findAllByGarduatedYear(graduatedYear);
//	}
	

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
		return user;
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
