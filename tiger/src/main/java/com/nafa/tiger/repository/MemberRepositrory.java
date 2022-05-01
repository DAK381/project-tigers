package com.nafa.tiger.repository;

import java.util.ArrayList;
import java.util.Collection;

import javax.transaction.Transactional;

import com.nafa.tiger.entity.UserRelationship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.User;
import org.springframework.web.bind.annotation.PathVariable;

@Repository
@Transactional
public interface MemberRepositrory extends JpaRepository<User, Long>{
	User findByEmailIgnoreCase(String email);
	
	
	//Find members where first name contains
	ArrayList<User> findByFirstNameIgnoreCaseContaining(String firstName);

	//Find members where last name contains
	ArrayList<User> findByLastNameIgnoreCaseContaining(String lastName);

	
//	//Find members with the given graduation year
//		ArrayList<User> findAllByGarduatedYear(int graduatedYear);

	//Find members by first name and last name containing the provided characters
	@Query(value="SELECT * from users where users.first_name like %:firstName% or users.last_name like %:lastName%",nativeQuery = true)
	ArrayList<User> findAllByFristNameAndLastNameContaining(@Param ("firstName") String firstName,@Param("lastName") String lastName);
}
