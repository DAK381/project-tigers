package com.nafa.tiger.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nafa.tiger.entity.Preset;

@Repository
public interface PresetRepository extends JpaRepository<Preset, Long> {

    ArrayList<Preset> findByPresetNameIgnoreCaseContaining(String presetName);
	Preset findByPresetName(String presetName);
    
}
