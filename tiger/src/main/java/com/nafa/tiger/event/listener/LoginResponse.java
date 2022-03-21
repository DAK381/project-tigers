package com.nafa.tiger.event.listener;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins="*")
public class LoginResponse {
	private String token;

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
