package com.nafa.tiger.entity;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;

//import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
@CrossOrigin(origins="*")
@Entity
@Data
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
	private String maidenName;
	@Column(name = "email_address", nullable = false)
	private String email;
	@Column(length = 60)
	private String password;
	private String role;
	private String address;
	private String Membership;
	private Date birthdate;
	private boolean isAlumni;


	private String phone;
	private boolean enabled = false;
	private Boolean locked =true;
//	@OneToMany (mappedBy = "user")
//	@JsonIgnore
//	private Set<Activity> activities;
	@ManyToMany()
	@JoinTable(name= "UserGroup",
	joinColumns= @JoinColumn(name="user_id", referencedColumnName = "user_id"), 
	inverseJoinColumns = @JoinColumn(name = "group_id", referencedColumnName = "groupId"))
	//@JsonIgnore
	private Set<Group> usgroup;

	public boolean getEnabled() {
		return enabled;

	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority authority = 
				new SimpleGrantedAuthority(role);
		return Collections.singletonList(authority);
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
		return false;
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
