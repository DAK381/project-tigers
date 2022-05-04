package com.nafa.tiger.event.listener;

import java.util.UUID;

import com.nafa.tiger.service.EmailSenderService;
import org.apache.logging.log4j.LogManager;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.security.authentication.event.AuthenticationFailureBadCredentialsEvent;
import org.springframework.stereotype.Component;

import com.nafa.tiger.entity.User;
import com.nafa.tiger.event.RegistrationCompleteEvent;
import com.nafa.tiger.service.UserService;

import lombok.extern.slf4j.Slf4j;

//for the logger to email
@Component
@Slf4j
public class RegitrationComepleteEventListener implements ApplicationListener<RegistrationCompleteEvent> {
	@Autowired
	private UserService userService;
	@Autowired
	private EmailSenderService emailSenderService;
	@Override
	public void onApplicationEvent(RegistrationCompleteEvent event) {
		// Create the verification Token for the USer with Link
		User user =event.getUser();
		String token = UUID.randomUUID().toString();
//		emailSenderService.sendSimpleEmail(""+user.getEmail(),
//				"token:"+event.getApplicationUrl()+"/verifyRegistration?token="+token,
//				"Verification Token");
		userService.saveVerificationTokenForUser(token,user);
		//send mail
		String url = event.getApplicationUrl()+"/verifyRegistration?token="+token;		
		//create sendVerificationEmail()
		emailSenderService.sendSimpleEmail(user.getEmail(),"Verification Email","click the link to verify your account: "+url);
		log.info("click the link to verify ypur account: {}",url);
		
	}
//	private static final Logger LOG = (Logger) LogManager.getLogger(RegitrationComepleteEventListener.class);
//	   public void onApplicationEvent(AuthenticationFailureBadCredentialsEvent event) {
//	        Object userName = event.getAuthentication().getPrincipal();
//	        Object credentials = event.getAuthentication().getCredentials();
//	        LOG.debug("Failed login using USERNAME [" + userName + "]");
//	        LOG.debug("Failed login using PASSWORD [" + credentials + "]");
//	    }
//	@Override
//	public void onApplicationEvent(RegistrationCompleteEvent event) {
//		// TODO Auto-generated method stub
//		
//	}

}
