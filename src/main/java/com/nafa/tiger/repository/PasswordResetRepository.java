package com.nafa.tiger.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.PasswordResetToken;

@Repository
public interface PasswordResetRepository extends JpaRepository<PasswordResetToken, Long>{
	PasswordResetToken findByToken(String token);

}
