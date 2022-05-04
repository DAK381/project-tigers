package com.nafa.tiger.entity;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

//import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="groups")
public class Group {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long groupId;
	
	private String groupName;
	private String groupYear;
	private String groupCount;
	
	@ManyToMany(mappedBy = "userGroup", cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<User> groupUser = new ArrayList<>();
	
	public void addMember(User user) {
		groupUser.add(user);
	}
	
	public Collection<User> getGroupUser() {
		return this.groupUser;
	}

	public Group(String groupName) {
		super();
		this.groupName = groupName;
	}
	
	
}
