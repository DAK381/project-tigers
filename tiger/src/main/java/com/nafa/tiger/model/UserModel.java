package com.nafa.tiger.model;

import java.util.*;
import java.util.stream.Collectors;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import com.nafa.tiger.entity.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
//implements UserDetails
public class UserModel  {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String firstName;
	private String maidenName;
	private String middleName;
	private String lastName;
	private String email;
	@Column(length = 60)
	private String password;
	private String matchingPassword;
	private String role;
	private String address;
	private String address2;
	private String city;
	private String state;
	private String zip;
	private String membership;
	private Date birthdate;
	private boolean isAlumni;
	private String phone;
	private String graduatedYear;

	public boolean getIsAlumni(){
		return isAlumni;
	}
	
	public String getGraduatedYear() {
		return graduatedYear;
	}
	
	public String getMembership() {
		return membership;
	}
	
	
//	private List<GrantedAuthority> authorities;
//	private boolean enabled;
//
//	public UserModel(User user) {
//        this.email = user.getEmail();
//        this.password = user.getPassword();
//        this.enabled = user.getEnabled();
//        this.authorities = Arrays.stream(user.getRole().split(","))
//                    .map(SimpleGrantedAuthority::new)
//                    .collect(Collectors.toList());
//    }
//
//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//	
//		return authorities;
//	}
//
//	@Override
//	public String getUsername() {
//		// TODO Auto-generated method stub
//		return email;
//	}
//
//	@Override
//	public boolean isAccountNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isAccountNonLocked() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isCredentialsNonExpired() {
//		// TODO Auto-generated method stub
//		return true;
//	}
//
//	@Override
//	public boolean isEnabled() {
//		// TODO Auto-generated method stub
//		return enabled;
//	}

}
