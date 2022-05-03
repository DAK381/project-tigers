package com.nafa.tiger.service;

import com.nafa.tiger.entity.Campaign;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.CampaignRepository;
import com.nafa.tiger.repository.MemberRepositrory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;

@Service
@Transactional
public class CampaignServiceImp  implements CampaignService{

    @Autowired
    private CampaignRepository campaignRepository;
    @Autowired
    private MemberRepositrory memberRepositrory;
    @Override
    public ArrayList<Campaign> getAllCampaign() {
        return (ArrayList<Campaign>) campaignRepository.findAll();
    }

    @Override
    public String addCampaign(Campaign campaign) {
        campaignRepository.save(campaign);
        return " saved";
    }

    @Override
    public String deleteCampaign(Long campaignId) {
        campaignRepository.deleteById(campaignId);
        return "deleted";
    }

    @Override
    public Campaign  getCampaigntById(Long campaignId) {
        return campaignRepository.findById(campaignId).get();
    }

    @Override
    public Campaign update(Long campaignId,Campaign campaign) {
    	Campaign updatedCampaign = campaignRepository.findById(campaignId).get();

    	if(campaign.getCampaignName() != null){
            updatedCampaign.setCampaignName(campaign.getCampaignName());
        }
        if(campaign.getCampaignDescription()!= null){
        	updatedCampaign.setCampaignDescription(campaign.getCampaignDescription());
        }
        
        if(campaign.getAmountGoal()!= null){
        	updatedCampaign.setAmountGoal(campaign.getAmountGoal());
        }
        
        if(campaign.getCampaignImage()!= null){
        	updatedCampaign.setCampaignImage(campaign.getCampaignImage());
        }
       
        return  updatedCampaign;
    }

   

    @Override
    public Collection<Campaign> getCampaignByMember(Long userId) {
        User user = memberRepositrory.findById(userId).get();
        return user.getUserCampaign();
    }

    @Override
    public Collection<User> getMembersByCampaign(Long campaignId) {
    	Campaign campaign = campaignRepository.findById(campaignId).get();
        return campaign.getCampaignUser();
    }


}
