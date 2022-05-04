package com.nafa.tiger.service;


import java.util.ArrayList;
import java.util.Collection;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;

public interface GroupService {

	String message();

	String addGroup(Group group);

	Group findByGroupId(Long groupId);

	ArrayList<Group> getGroupByNameContaining(String groupName);
	


	ArrayList<Group> getAllGroup();

	void addUserToGroup(Long groupId, Long userId);

	Collection<Group> getGroupByMember(Long userId);

	Collection<User> getMembersByGroup(Long groupId);


//	Group addGroup(Group group);

	
}
