package com.nafa.tiger.entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.fasterxml.jackson.annotation.JsonIgnore;

//import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
@CrossOrigin(origins="*")
@Entity
@Getter
@Setter
@Table(name = "users", uniqueConstraints = @UniqueConstraint(name = "emailid_unique", columnNames = "email_address"))
public class User implements UserDetails{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "user_id")
	private Long id;
	@Size(min = 2, message = "The firstName should be at least 2 characters")
	private String firstName;
	@Size(min = 2, message = "The Last Name should be at least 2 characters")
	private String lastName;
	private String middleName;
	private String maidenName;
	@Column(name = "email_address", nullable = false)
	private String email;
	@Column(length = 60)
	private String password;
	private String role;
	@Column(name = "address")
	private String address;
	@Column(name = "address_2")
	private String address2;
	private String city;
	private String state;
	private String zip;
	private String membership;
	private Date birthdate;
	private boolean isAlumni;
    private String phone;
	private boolean enabled = false;
	private Boolean locked =false;
	@Column(name = "graduated_year")
	private String graduatedYear;
	
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name= "user_group",
	joinColumns= @JoinColumn(name="user_id", referencedColumnName = "user_id"), 
	inverseJoinColumns = @JoinColumn(name = "groupId", referencedColumnName = "groupId"))
	@JsonIgnore
	private Collection<Group> userGroup = new ArrayList<>();
	
	////Event many to many*****************************************************
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name= "user_event",
			joinColumns= @JoinColumn(name="user_id", referencedColumnName = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "eventId", referencedColumnName = "eventId"))
	@JsonIgnore
	private Collection<Events> userEvent = new ArrayList<>();
	
	
	
///Campaign many to many************************
////Event many to many*****************************************************
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name= "user_campaign",
			joinColumns= @JoinColumn(name="user_id", referencedColumnName = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "campaignId", referencedColumnName = "campaignId"))
	@JsonIgnore
	private Collection<Campaign> userCampaign = new ArrayList<>();

	////Preset many to many*****************************************************
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name= "preset_user",
			joinColumns= @JoinColumn(name="user_id", referencedColumnName = "user_id"),
			inverseJoinColumns = @JoinColumn(name = "presetId", referencedColumnName = "presetId"))
	@JsonIgnore
	private Collection<Preset> presetUser = new ArrayList<>();

//	@JsonIgnore
//	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinTable(name="relationships")
//	@JoinColumns({@JoinColumn(name="user_id",referencedColumnName = "user_id"),
//			@JoinColumn(name="relationship", referencedColumnName = "relationship")})
//	private Collection<User> relationships = new ArrayList<>();
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name= "relationship_user",
		joinColumns= @JoinColumn(name="user_id", referencedColumnName = "user_id"),
		inverseJoinColumns = @JoinColumn(name = "relationof"))
	@JsonIgnore
	private Collection<UserRelationship> relationOfUser = new ArrayList<>();




	//Test
	public void setUserGroup(Set<Group> userGroup) {
		this.userGroup = userGroup;
	}
	
	public Collection<Group> getTest(){
		return this.userGroup;
	}
	
	public boolean getEnabled() {
		return enabled;

	}


	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
//		SimpleGrantedAuthority authority = 
//				new SimpleGrantedAuthority(role);
//		return Collections.singletonList(authority);
		return Collections.emptyList();
	}

    
	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}
	public String getFirstName() {
		return firstName;
	}
	
	public String getLastName() {
		return lastName;
	}
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}
	
	

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return !locked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return enabled;
	}
	
}
