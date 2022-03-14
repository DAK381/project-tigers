package com.nafa.tiger.service;


import java.util.ArrayList;

import com.nafa.tiger.entity.Group;

public interface GroupService {

	String message();

	String addGroup(Group group);

	Group findByGroupId(Long groupId);

	ArrayList<Group> getGroupByNameContaining(String groupName);

	

//	Group addGroup(Group group);

	
}
