package com.nafa.tiger.service;

import com.nafa.tiger.entity.VerificationToken;

import java.util.Optional;

import com.nafa.tiger.entity.User;
import com.nafa.tiger.model.UserModel;

public interface UserService {

	User registerUser(UserModel userModel);

	void saveVerificationTokenForUser(String token, User user);

	String validateVerificationToken(String token);

	VerificationToken generateNewVerificationToken(String oldToken);

	User findUserByEmail(String email);

	void createPasswordResetTokenForUser(User user, String token);

	String validatePasswordToken(String token);

	Optional<User> getUserByPasswordResetToken(String token);

	void changePassword(User user, String newPassword);

	boolean checkIfValidOldPassword(User user, String oldPassword);

}
