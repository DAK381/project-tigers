package com.nafa.tiger.entity;

import java.util.Calendar;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class PasswordResetToken {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String token;
	private Date expirationTime;
	private static final int EXPIRATION_TIME = 10;
	
	@OneToOne(fetch =FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "user_id", referencedColumnName = "user_id",nullable = false,
	foreignKey = @ForeignKey(name = "FK_USER_PASSWORD_TOKEN"))
	private User user;

	public PasswordResetToken(String token, User user) {
		super();
		this.token = token;
		this.user = user;
		this.expirationTime = calculateExpirationDate();
	}
	

	private Date calculateExpirationDate() {
		Calendar calendar = Calendar.getInstance();
		calendar.setTimeInMillis(new Date().getTime());
		calendar.add(calendar.MINUTE, EXPIRATION_TIME);
		return new Date(calendar.getTime().getTime());
	}


	public PasswordResetToken(String token) {
		super();
		this.token = token;
		this.expirationTime = calculateExpirationDate();
	}
	 
	
}
