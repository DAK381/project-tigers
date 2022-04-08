package com.nafa.tiger.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.User;

@Repository
public interface UserReprository extends JpaRepository<User, Long>{

	public User findByEmail(String email);

}
