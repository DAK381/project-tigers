package com.nafa.tiger.repository;

import com.nafa.tiger.entity.Campaign;
import com.nafa.tiger.entity.Events;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CampaignRepository extends JpaRepository<Campaign, Long> {
}
