package com.nafa.tiger.service;

import java.util.Calendar;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.PasswordResetToken;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.entity.VerificationToken;
import com.nafa.tiger.model.UserModel;
import com.nafa.tiger.repository.PasswordResetRepository;
import com.nafa.tiger.repository.UserReprository;
import com.nafa.tiger.repository.VerificationTokenRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImp implements UserService{
	
	@Autowired
	private UserReprository userReprository;
	@Autowired
	private PasswordEncoder passwordEncoder;


	
	
	@Autowired
	private VerificationTokenRepository verificationTokenReprository;
	
	@Autowired
	private PasswordResetRepository passwordResetTokenRepository;
	
	public User registerUser(UserModel userModel) {
		
		if(userReprository.findByEmail(userModel.getEmail()) != null ) {
			throw new IllegalStateException("User already Exists");
		}
		User user = new User();
		user.setFirstName(userModel.getFirstName());
		user.setMiddleName(userModel.getMiddleName());
		user.setLastName(userModel.getLastName());
		user.setMaidenName(userModel.getMaidenName());
		user.setEmail(userModel.getEmail());
		user.setPassword(passwordEncoder.encode(userModel.getPassword()));
		user.setAddress(userModel.getAddress());
		user.setAddress2(userModel.getAddress2());
		user.setCity(userModel.getCity());
		user.setState(userModel.getState());
		user.setZip(userModel.getZip());
		user.setBirthdate(userModel.getBirthdate());
		user.setPhone(userModel.getPhone());
		user.setMembership(userModel.getMembership());
		user.setAlumni(userModel.getIsAlumni());
	    user.setGraduatedYear(userModel.getGraduatedYear());
		user.setRole("USER");
		userReprository.save(user);
		return user;
		
	}
	@Override
	public void saveVerificationTokenForUser(String token, User user) {
		VerificationToken verificationToken = new VerificationToken(token,user);
		verificationTokenReprository.save(verificationToken);
		
		
		
	}
	@Override
	public String validateVerificationToken(String token) {
		VerificationToken verificationToken = 
			verificationTokenReprository.findByToken(token);
		if(verificationToken==null) {
			return"invalid";
		}
		User user = verificationToken.getUser();
		Calendar cal = Calendar.getInstance();
		 if((verificationToken.getExpirationTime().getTime()-cal.getTime().getTime())<=0) {
			 verificationTokenReprository.delete(verificationToken);
			 return"expired";
		 }
		 
		 user.setEnabled(true);
		 userReprository.save(user);
		 return"valid";
		
		
	}
	@Override
	public VerificationToken generateNewVerificationToken(String oldToken) {
		VerificationToken verificationToken = verificationTokenReprository.findByToken(oldToken);
				verificationToken.setToken(UUID.randomUUID().toString());
				verificationTokenReprository.save(verificationToken);

				return verificationToken;
		
	}
	@Override
	public User findUserByEmail(String email) {
		return userReprository.findByEmail(email);
	}
	@Override
	public void createPasswordResetTokenForUser(User user, String token) {
		PasswordResetToken passwordResetToken = new PasswordResetToken(token,user);
		passwordResetTokenRepository.save(passwordResetToken);
		
		
	}
	@Override
	public String validatePasswordToken(String token) {
		PasswordResetToken passwordRestToken = passwordResetTokenRepository.findByToken(token);
		if(passwordRestToken==null) {
			return"invalid";
		}
		User user = passwordRestToken.getUser();
		Calendar cal = Calendar.getInstance();
		 if((passwordRestToken.getExpirationTime().getTime()-cal.getTime().getTime())<=0) {
			 passwordResetTokenRepository.delete(passwordRestToken);
			 return"expired";
		 }
	 	 
		 return"valid";
	}
	@Override
	public Optional<User> getUserByPasswordResetToken(String token) {
		Long long1 = passwordResetTokenRepository.findByToken(token).getId();
		log.info(""+long1);
		return Optional.ofNullable(passwordResetTokenRepository.findByToken(token).getUser());
		
	}
	@Override
	public void changePassword(User user, String newPassword) {
		user.setPassword(passwordEncoder.encode(newPassword));
		userReprository.save(user);
		
	}
	@Override
	public boolean checkIfValidOldPassword(User user, String oldPassword) {
		return passwordEncoder.matches(oldPassword,user.getPassword());
	}

}
