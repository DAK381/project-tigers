package com.nafa.tiger.controller;

import java.util.Optional;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import com.nafa.tiger.entity.EmailInformation;
import com.nafa.tiger.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nafa.tiger.entity.User;
import com.nafa.tiger.entity.VerificationToken;
import com.nafa.tiger.event.RegistrationCompleteEvent;
import com.nafa.tiger.model.PasswordModel;
import com.nafa.tiger.model.UserModel;
import com.nafa.tiger.service.UserService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin(origins = "*")
public class RegistrationController {

	@GetMapping("/test")
	public String check() {
		return"resister vayo";
		 }
	@Autowired
	private UserService userService;
	
	@Autowired
	private ApplicationEventPublisher publisher;
	@Autowired
	private EmailSenderService emailSenderService;
	
	
	@PostMapping("/register") 
	public String registerUser(@RequestBody UserModel userModel,final HttpServletRequest request) {
		User user = userService.registerUser(userModel);
		publisher.publishEvent(new RegistrationCompleteEvent(user,
				applicationUrl(request)));
		return "Success";
	}
	@GetMapping("/verifyRegistration")
	public String verifyRegistration(@RequestParam("token") String token) {
		String result = userService.validateVerificationToken(token);
		if(result.equalsIgnoreCase("valid")) {
			return"User Verified successfully";
		}
		else {
			return"bad user";
		}
	}
	@GetMapping("/resendVerifyToken")
	public String resendVerificationToken(@RequestParam("token") String oldToken, HttpServletRequest request) {
		VerificationToken verificationToken =userService.generateNewVerificationToken(oldToken);
		User user = verificationToken.getUser();
		resendVerificationTokenMail(user, applicationUrl(request),verificationToken);
		return"verification code resend";
				}
	@PostMapping("/resetPassword")
	public String resetPassword(@RequestBody PasswordModel passwordModel, HttpServletRequest request) {
		User user = userService.findUserByEmail(passwordModel.getEmail());
		String url ="";
		if(user!=null) {
			String token = UUID.randomUUID().toString();
			userService.createPasswordResetTokenForUser(user,token);
			url =passwordResetTokenMail(user, applicationUrl(request),token);
		}
		emailSenderService.sendSimpleEmail(passwordModel.getEmail(),"Reset Password",
				"Click here to reset the password:  "+url);

		return url;
		
	}
	
	@PostMapping("/savePassword")
	public String savePassword(@RequestParam("token") String token,@RequestBody PasswordModel passwordModel) {
		String result = userService.validatePasswordToken(token);
		if(!result.equalsIgnoreCase("valid")) {
			return "Invalid tokens";
		}
		
		Optional<User> user = userService.getUserByPasswordResetToken(token); 
		if(user.isPresent()) {
			userService.changePassword(user.get(),passwordModel.getNewPassword());
			return "password Reset Sucessfully";
		}
		else {
			return"Invalid Token5";
		}
		
	}
	
	@PostMapping("/changePassword")
	public String changePassword(@RequestBody PasswordModel passwordModel) {
		User user = userService.findUserByEmail(passwordModel.getEmail());
		if (!userService.checkIfValidOldPassword(user,passwordModel.getOldPassword())) {
			return "Invalid Old Password";
		}
		//save new password
		userService.changePassword(user, passwordModel.getNewPassword());
		return "Password changed Sucessfully";
	}

	private String passwordResetTokenMail(User user, String applicationUrl, String token) {
		String url =applicationUrl+"/savePassword?token="+token;		
		//create sendVerificationEmail()
		emailSenderService.sendSimpleEmail(user.getEmail(),"Verification Email","click the link to reset your password: "+url);
		log.info("click the link to reset your password: {}",url);
		return url;
		
	}
	private void resendVerificationTokenMail(User user, String applicationUrl,VerificationToken token) {
		String url =applicationUrl+"/verifyRegistration?token="+token.getToken();		
		//create sendVerificationEmail()
		emailSenderService.sendSimpleEmail(user.getEmail(),"Verification Email","click the link to verify your account: "+url);
		log.info("click the link to verify your account: {}",url);
		
		
	}
	private String applicationUrl(HttpServletRequest request) {
		return "http://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath();
	}
	
	
	
}
