package com.nafa.tiger.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.PendingGroupRequest;

@Repository
public interface AddGroupRequestRepository extends JpaRepository<PendingGroupRequest, Long>{

}
