package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import com.nafa.tiger.entity.*;


public interface MemberService {
	ArrayList<User> getAllUsers();

	void deleteUser(Long user_id);

	User getUserById(Long user_id);

	User getUserByEmail(String email);

	ArrayList<User> getAllByFirstNameContaining(String firstName);

	ArrayList<User> getAllByLastNameContaining(String lastName);

	ArrayList<User> getAllByFirstNameAndLastNameContaining(String firstName, String lastName);
	
	
//	ArrayList<User> getAllByGraduatedYear(int graduatedYear);



	User addUserToGroup(Long userId, Long groupId);

	Collection<Group> removeUserFromGroup(Long userId, Long groupId);

	PendingGroupRequest requestToaddGroup(String groupName, Long userId);
	
	 User update(Long User_id, User user);

    Collection<UserRelationship> getRelationship(Long userId);


}
