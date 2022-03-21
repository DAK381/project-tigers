package com.nafa.tiger.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class PendingGroupRequest {
	
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY) 
	  private Long requestId;
	  
	  private String userEmail;
	  private String userFirstName;
	  private String userLastName;
	  private String suggestedGroupName;
	  
	  public PendingGroupRequest(String suggestedGroupName, User user) {
		  this.suggestedGroupName = suggestedGroupName;
		  this.userEmail = user.getEmail();
		  this.userLastName = user.getLastName();
		  this.userFirstName = user.getFirstName();
	  }
}
