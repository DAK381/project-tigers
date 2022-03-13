package com.nafa.tiger.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

//import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="table_group")
public class Group {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long groupId;
	private String groupName;
	@ManyToMany(mappedBy = "usgroup")
	//@JsonIgnore
	private Set<User> userGroup;
	
	public void addMember(User user) {
		userGroup.add(user);
	}
//	@JoinTable(name= "UserGroup",
//		joinColumns= @JoinColumn(name="group_id", referencedColumnName = "groupId"), 
//		inverseJoinColumns = @JoinColumn(name = "email_address", referencedColumnName = "email_address"))
	
}
