package com.nafa.tiger.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.GroupRepository;
import com.nafa.tiger.repository.MemberRepositrory;
import com.nafa.tiger.repository.UserReprository;

import javax.transaction.Transactional;

@Service
@Transactional
public class GroupServiceImpl implements GroupService {

	@Autowired
	private GroupRepository groupRepository;
	@Autowired
	private MemberRepositrory memberRepository;


	@Override
	public String message() {
		return groupRepository.toString();
	}

	@Override
	public String addGroup(Group group) {
		groupRepository.save(group);
		return"add vayo";
	}

	@Override
	public Group findByGroupId(Long groupId) {
		return groupRepository.findById(groupId).get();
	}

	@Override
	public ArrayList<Group> getGroupByNameContaining(String groupName) {
		return groupRepository.findByGroupNameIgnoreCaseContaining(groupName);
	}

	@Override
	public ArrayList<Group> getAllGroup() {
		return (ArrayList<Group>) groupRepository.findAll();

	}

//	@Override
//	public void addUserToGroup(Long groupId, Long userId) {
//		User user = memberRepository.findById(userId).get();
//		Group group = groupService.findByGroupId(groupId);
//		user.getUserGroup().add(group);
//	}


	
//	@Override
//	public Group addGroup(Group group) {
//		return groupRepository.save(group);
//	}

	
}
