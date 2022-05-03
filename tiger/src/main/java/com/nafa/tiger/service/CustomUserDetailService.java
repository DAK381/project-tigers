package com.nafa.tiger.service;

import com.nafa.tiger.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.User;
import com.nafa.tiger.model.UserModel;
import com.nafa.tiger.repository.UserReprository;

@Service
public class CustomUserDetailService implements UserDetailsService {
	
	@Autowired
	UserReprository userReprository;

	@Override
	public User loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userReprository.findByEmail(email);
        if (user == null) {
            throw new ResourceNotFoundException("User not found with id :" + email);
        }
        return user;  
	}

}
