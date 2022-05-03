package com.nafa.tiger.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="campaign")
public class Campaign {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long campaignId;
    private String campaignName;
    private String campaignDescription;
    private String amountGoal;
    private String addedDate;
    private String campaignImage;
   
    @ManyToMany(mappedBy = "userCampaign", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<User> campaignUser = new ArrayList<>();

}
