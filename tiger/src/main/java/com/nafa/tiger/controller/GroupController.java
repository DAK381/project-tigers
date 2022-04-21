package com.nafa.tiger.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.GroupService;

import java.sql.*;

@RestController
@CrossOrigin(origins ="*")
public class GroupController {
	
	protected class MemberGroup{
		public int groupId;
		public String groupName;

		public MemberGroup(){}
	}

	protected class GroupMember{
		public int id;
		public String firstName;
		public String lastName;
		public String maidenName;
		public String email;
		public String address;
		public String membership;
		public Date birthdate;
		public boolean isAlumni;
    	public String phone;
		public String graduatedYear; 

		public GroupMember(){}
	}

	@Autowired
	private GroupService groupService;
	
	@PostMapping("/addgroup")
	public String addGroup(@RequestBody Group group) {
		return groupService.addGroup(group);
	}
	
	@GetMapping("/search/{groupId}")
	public Group getByGroupId(@PathVariable Long groupId) {
		return groupService.findByGroupId(groupId);
	}

	
	@GetMapping("/search/allgroup")
	public ArrayList<Group> getAllGroup(){
		return groupService.getAllGroup();
	}
	
	@GetMapping("/search/name/{groupName}")
	public ArrayList<Group> getGroupByNameContaining(@PathVariable("groupName") String groupName){
		return groupService.getGroupByNameContaining(groupName);
	}
	
	@GetMapping("/search/membersGroups/{userId}")
	public ArrayList<MemberGroup> getGroupsByMember(@PathVariable("userId") Long userId){

		String query = "SELECT groups.group_id, groups.group_name FROM groups JOIN user_group ON groups.group_id=user_group.group_id WHERE user_group.user_id = " + userId;
		ArrayList<MemberGroup> membersGroups= new ArrayList<MemberGroup>();

		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger"); 
			Statement stmt = con.createStatement();

			ResultSet rs = stmt.executeQuery(query);
		) {
			while(rs.next()){
				MemberGroup g = new MemberGroup();
				g.groupId = rs.getInt("group_id");
				g.groupName = rs.getString("group_name");
				membersGroups.add(g);
			}
		}
		catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		}

		return membersGroups;
	}

	@GetMapping("/search/membersByGroup/{groupName}")
	public ArrayList<GroupMember> getMembersByGroup(@PathVariable("groupName") String groupName){

		String query = "SELECT * FROM users JOIN user_group ON users.user_id=user_group.user_id " + 
					   "JOIN groups ON user_group.group_id=groups.group_id WHERE groups.group_name = '" + groupName + "'";
		ArrayList<GroupMember> groupMembers= new ArrayList<GroupMember>();

		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger"); 
			Statement stmt = con.createStatement();

			ResultSet rs = stmt.executeQuery(query);
		) {
			while(rs.next()){
				GroupMember m = new GroupMember();
				m.id = rs.getInt("user_id");
				m.firstName = rs.getString("first_name");
				m.lastName = rs.getString("last_name");
				m.maidenName = rs.getString("maiden_name");
				m.email = rs.getString("email_address");
				m.address = rs.getString("address");
				m.membership = rs.getString("membership");
				m.birthdate = rs.getDate("birthdate");
				m.isAlumni = rs.getBoolean("is_alumni");
				m.phone = rs.getString("phone");
				m.graduatedYear = rs.getString("graduated_year");
				
				groupMembers.add(m);
			}
		}
		catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		}

		return groupMembers;
	}
	
	@PostMapping("addMemberIngroup/{groupName}/{userName}")
	public void addMemberToGroup(@PathVariable("userName") Long userId, @PathVariable("groupName") Long groupId){
		groupService.addUserToGroup(userId,groupId);
	}

	@PostMapping("removeFromGroup/{groupName}/{userName}")
	public void removeFromGroup(@PathVariable("userName") Long userId, @PathVariable("groupName") Long groupId){
		try(Connection con = DriverManager.getConnection("jdbc:postgresql://nafa.cp4e12t7aiyi.us-east-2.rds.amazonaws.com/registration",
		"tiger", "nafatiger");) {
			String query = "DELETE FROM user_group WHERE user_id = " + userId + " AND group_id = " + groupId;
			PreparedStatement ps = con.prepareStatement(query);
			ps.executeUpdate();
	
		 } catch (SQLException e) {
			System.out.println("Error: " + e.getMessage());
		 }
	}
	
   
//	@PostMapping("addMemberIngroup/{groupId}/{userId}")
//	public void addMemberToGroup(@PathVariable("userId") Long userId, @PathVariable("groupId") Long groupId){
//		 groupService.addUserToGroup(groupId,userId);
//	}
//	@PostMapping("/test")
//	public void test(@RequestParam Long userId, @RequestParam Long group) {
//		try {
//			groupService.addUserToGroup(userId, group);
//		} catch (Exception e) {
//			System.out.println(e.toString());
//		}
//	}
	
	
}
