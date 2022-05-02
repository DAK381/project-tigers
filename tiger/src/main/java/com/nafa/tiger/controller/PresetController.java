package com.nafa.tiger.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.nafa.tiger.entity.Preset;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.PresetService;

import java.util.Collection;

import javax.servlet.http.HttpServletRequest;


@RestController
@CrossOrigin(origins ="*")
public class PresetController {
    
    @Autowired
	private PresetService presetService;

    @PostMapping("/addPreset")
	public String addPreset(@RequestBody Preset preset, final HttpServletRequest request) {
		return presetService.addPreset(preset);
	}

    @GetMapping("/search/allPresets")
	public ArrayList<Preset> getAllPreset(){
		return presetService.getAllPreset();
	}

    @PutMapping("/addMemberToPreset/{presetId}/{userId}")
	public void addMemberToPreset(@PathVariable("presetId") Long presetId,@PathVariable("userId") Long userId){
		presetService.addMemberToPreset(presetId,userId);
	}
    
    
    @DeleteMapping("/removeMemberFromPreset/{presetId}/{userId}")
	public void removeMemberFromPreset(@PathVariable("presetId") Long presetId,@PathVariable("userId") Long userId){
		presetService.removeMemberfromPreset(presetId,userId);
	}
    
    @DeleteMapping("/preset/delete/{presetId}")
    public String deleteEvent(@PathVariable("presetId") Long presetId){
        return presetService.deletePreset(presetId);
    }

    @GetMapping("/search/membersByPreset/{presetId}")
	public Collection<User> getMembersByPreset(@PathVariable("presetId") Long presetId){
		return presetService.getMembersByPreset(presetId);
	}
}
