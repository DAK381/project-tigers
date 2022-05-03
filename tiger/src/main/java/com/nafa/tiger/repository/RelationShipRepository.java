package com.nafa.tiger.repository;


import com.nafa.tiger.entity.Relationship;
import com.nafa.tiger.entity.UserRelationship;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RelationShipRepository extends JpaRepository<UserRelationship,Long> {
    UserRelationship findByRelatedTo(Long relatedUserId);
}
