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

    @PutMapping("/addPreset")
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

    @GetMapping("/search/membersByPreset/{presetId}")
	public Collection<User> getMembersByPreset(@PathVariable("presetId") Long presetId){
		return presetService.getMembersByPreset(presetId);
	}
}
