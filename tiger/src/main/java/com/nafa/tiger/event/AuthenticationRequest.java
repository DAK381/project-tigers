package com.nafa.tiger.event;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="*")
public class AuthenticationRequest {
	
	private String email;
	private String password;
	public String getEmail() {
		return email;
	}
	
	public String getPassword() {
		return password;
	}
}
