package com.nafa.tiger.service;

import java.util.ArrayList;
import java.util.Collection;

import com.nafa.tiger.entity.Preset;
import com.nafa.tiger.entity.User;

public interface PresetService {

    String addPreset(Preset preset);

    ArrayList<Preset> getAllPreset();

    User addMemberToPreset(Long presetId, Long userId);

    Collection<User> getMembersByPreset(Long presetId);
    
}