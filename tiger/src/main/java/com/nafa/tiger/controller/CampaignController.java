package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Campaign;
import com.nafa.tiger.service.CampaignService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/campaign")
@CrossOrigin(origins ="*")

public class CampaignController {

    @Autowired
    private CampaignService campaignService;
    @GetMapping("/get-campaigns")
    public ArrayList<Campaign> getAllCampaign(){
        return campaignService.getAllCampaign();
    }

    @PutMapping("/update-campaign/{campaignId}")
    public Campaign update(@PathVariable("campaignId") Long campaignId, @RequestBody Campaign campaign){
        return  campaignService.update(campaignId,campaign);
    }
    @PostMapping("/add-campaign")
    public String addCampaign(@RequestBody Campaign campaign){
        return campaignService.addCampaign(campaign);

    }
    
    @DeleteMapping("/delete/{campaignId}")
    public String deleteEvent(@PathVariable("campaignId") Long campaignId){
        return campaignService.deleteCampaign(campaignId);
}
}

