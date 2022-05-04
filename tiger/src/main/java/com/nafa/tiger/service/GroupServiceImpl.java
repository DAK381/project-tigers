package com.nafa.tiger.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.GroupRepository;
import com.nafa.tiger.repository.MemberRepositrory;

import javax.transaction.Transactional;

import java.sql.*;
import java.util.Collection;


@Service
@Transactional
public class GroupServiceImpl implements GroupService {

	Connection con = null;
	PreparedStatement ps = null;
	
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

	@Override
	public void addUserToGroup(Long userId, Long groupId) {
		User user = memberRepository.findById(userId).get();
		System.out.println(user.getEmail() + "***********************************");
		Group group = groupRepository.findById(groupId).get();
		System.out.println(group.getGroupName() +  "*******************************");

		String query = "INSERT INTO user_group (user_id, group_id) VALUES (" + userId + ", " + groupId + ")";

		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger");) {
			ps = con.prepareStatement(query);
			ps.executeUpdate();
	
		 } catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		 }

//		group.getUserGroup().add(user);
//		group.addMember(user);
		//user.getTest().add(group);
		group.getGroupUser().add(user);
		groupRepository.save(group);
		//return user;
	}

	@Override
	public Collection<Group> getGroupByMember(Long userId) {
		User user = memberRepository.findById(userId).get();
		return user.getUserGroup();
	}

	@Override
	public Collection<User> getMembersByGroup(Long groupId) {
		Group group = groupRepository.findById(groupId).get();
		return group.getGroupUser();
	}


//	@Override
//	public Group addGroup(Group group) {
//		return groupRepository.save(group);
//	}

	
}
