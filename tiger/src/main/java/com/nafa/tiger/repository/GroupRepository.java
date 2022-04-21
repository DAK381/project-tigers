package com.nafa.tiger.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

	ArrayList<Group> findByGroupNameIgnoreCaseContaining(String groupName);
	Group findByGroupName(String groupName);



//	ArrayList<Group> findByNameIgnoreCaseContaining(String group_name);

}
