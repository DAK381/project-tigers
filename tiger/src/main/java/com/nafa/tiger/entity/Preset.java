package com.nafa.tiger.entity;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="presets")
public class Preset {
    
    @Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long presetId;
	private String presetName;
	private String dateAdded;
	
	@ManyToMany(mappedBy = "presetUser", cascade = CascadeType.ALL)
	@JsonIgnore
	private Collection<User> presetUser = new ArrayList<>();
	
	public void addMember(User user) {
		presetUser.add(user);
	}
	
	public Collection<User> getPresetUser() {
		return this.presetUser;
	}

	public Preset(String presetName) {
		super();
		this.presetName = presetName;
	}
}
