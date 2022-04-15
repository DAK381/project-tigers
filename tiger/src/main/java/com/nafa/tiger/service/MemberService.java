package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.PendingGroupRequest;
import com.nafa.tiger.entity.User;


public interface MemberService {
	ArrayList<User> getAllUsers();

	void deleteUser(Long User_id);

	User getUserById(Long User_id);

	User getUserByEmail(String email);

	ArrayList<User> getAllByFirstNameContaining(String firstName);

	ArrayList<User> getAllByLastNameContaining(String lastName);

	ArrayList<User> getAllByFirstNameAndLastNameContaining(String firstName, String lastName);
	
	
//	ArrayList<User> getAllByGraduatedYear(int graduatedYear);



	User addUserToGroup(Long userId, Long groupId);

	Collection<Group> removeUserFromGroup(Long userId, Long groupId);

	PendingGroupRequest requestToaddGroup(String groupName, Long userId);
}
