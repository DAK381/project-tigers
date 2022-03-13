package com.nafa.tiger.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.repository.GroupRepository;

@Service
public class GroupServiceImpl implements GroupService {

	@Autowired
	private GroupRepository groupRepository;

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
	
//	@Override
//	public Group addGroup(Group group) {
//		return groupRepository.save(group);
//	}

	
}
