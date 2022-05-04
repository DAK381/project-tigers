package com.nafa.tiger.service;

import com.nafa.tiger.entity.Campaign;
import com.nafa.tiger.entity.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public interface CampaignService {
    ArrayList<Campaign> getAllCampaign();

    String addCampaign(Campaign campaign);

    String deleteCampaign(Long campaignId);

    Campaign getCampaigntById(Long campaignId);

    Campaign update(Long campaignId, Campaign campaign);

//    User addUserToCampaign(Long userId, Long campaignId);

    Collection<Campaign> getCampaignByMember(Long userId);

    Collection<User> getMembersByCampaign(Long groupId);
}