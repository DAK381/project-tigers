package com.nafa.tiger.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Scholarship {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long scholarshipId;
    private String scholarshipName;
    private String scholarshipDescription;
    private String scholarshipImage;
    private String deadline;
    private String formLink;
    private String addedDate;
    private String scholarshipAmount;
}
