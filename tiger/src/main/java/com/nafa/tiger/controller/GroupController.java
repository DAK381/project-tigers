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
	public ArrayList<MemberGroup> getMemberGroups(@PathVariable("userId") Long userId){

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
