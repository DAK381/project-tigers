package com.nafa.tiger.repository;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.User;

@Repository
@Transactional
public interface MemberRepositrory extends JpaRepository<User, Long>{
	User findByEmailIgnoreCase(String email);
	
	
	//Find members where first name contains
	ArrayList<User> findByFirstNameIgnoreCaseContaining(String firstName);

	//Find members where last name contains
	ArrayList<User> findByLastNameIgnoreCaseContaining(String lastName);
	
	//Find members with the given graduation year
		ArrayList<User> findAllByGarduationYear(int graduatedYear);

	//Find members by first name and last name containing the provided characters
	@Query(value="SELECT * from table_member where table_member.first_name ilike %:firstName% and table_member.last_name ilike %:lastName% ",nativeQuery = true)
	ArrayList<User> findAllByFristNameAndLastNameContaining(@Param("firstName") String firstName,@Param("lastName") String lastName);
}
