package com.nafa.tiger.repository;

import com.nafa.tiger.entity.About;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AboutRepository extends JpaRepository<About,Long> {
}
