package com.nafa.tiger.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nafa.tiger.entity.Preset;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.PresetRepository;
import com.nafa.tiger.repository.MemberRepositrory;

import javax.transaction.Transactional;

import java.util.Collection;


@Service
@Transactional
public class PresetServiceImp implements PresetService{
    
	
	@Autowired
	private PresetRepository presetRepository;
	@Autowired
	private MemberRepositrory memberRepository;

    @Override
	public String addPreset(Preset preset) {
		presetRepository.save(preset);
        return "Successfully added preset";
	}

    @Override
    public ArrayList<Preset> getAllPreset(){
		return (ArrayList<Preset>) presetRepository.findAll();

	}

    @Override
    public User addMemberToPreset(Long presetId, Long userId){
		User user = memberRepository.findById(userId).get();
		Preset preset = presetRepository.findById(presetId).get();

		if (!user.getPresetUser().contains(preset)) {
            user.getPresetUser().add(preset);
           }
           return new User();

	}
    
    
    @Override
    public User removeMemberfromPreset(Long presetId, Long userId){
		User user = memberRepository.findById(userId).get();
		Preset preset = presetRepository.findById(presetId).get();

		if (!user.getPresetUser().contains(preset)) {
            user.getPresetUser().remove(preset);
           }
           return new User();

	}
    
    
    @Override
    public String deletePreset(Long presetId) {
    	presetRepository.deleteById(presetId);
        return "deleted";
    }
    

    @Override
    public Collection<User> getMembersByPreset(Long presetId){
		Preset preset = presetRepository.findById(presetId).get();
		return preset.getPresetUser();
	}

}
