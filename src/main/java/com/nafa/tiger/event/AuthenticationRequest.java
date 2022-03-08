package com.nafa.tiger.event;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="*")
public class AuthenticationRequest {
	
	private String userName;
	private String password;
	public String getUserName() {
		return userName;
	}
	
	public String getPassword() {
		return password;
	}
}
