package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Optional;

import com.nafa.tiger.entity.Activity;
import com.nafa.tiger.entity.User;


public interface MemberService {
	ArrayList<User> getAllUsers();

	void deleteUser(Long User_id);

	User getUserById(Long User_id);

	User getUserByEmail(String email);

	ArrayList<User> getAllByFirstNameContaining(String firstName);

	ArrayList<User> getAllByLastNameContaining(String lastName);

	ArrayList<User> getAllByFirstNameAndLastNameContaining(String firstName, String lastName);

//	User addActivity(Long userId,Activity activity);

	ArrayList<User> getByActivity(String details);

	ArrayList<Activity> getActivityById(Long userId);

	User addUserToGroup(Long userId, Long groupId);
}
