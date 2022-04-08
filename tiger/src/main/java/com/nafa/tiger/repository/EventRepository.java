package com.nafa.tiger.repository;

import com.nafa.tiger.entity.Events;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Events, Long> {
}
