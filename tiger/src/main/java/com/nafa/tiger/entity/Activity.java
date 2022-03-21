//package com.nafa.tiger.entity;
//
//import java.util.Set;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToMany;
//import javax.persistence.ManyToOne;
//
////import com.fasterxml.jackson.annotation.JsonIgnore;
//
//import lombok.Data;
//
//@Entity
//@Data
//public class Activity{
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long activityId;
//	private String activityName;
//	private String year;
//	@ManyToMany(mappedBy = "userActivity")
//	private Set<User> activityUser;
//
//	
//	
//	
//	
//}
