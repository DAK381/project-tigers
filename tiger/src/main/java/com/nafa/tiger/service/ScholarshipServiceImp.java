package com.nafa.tiger.service;

import com.nafa.tiger.entity.Scholarship;
import com.nafa.tiger.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ScholarshipServiceImp implements ScholarshipService{

    @Autowired
    private ScholarshipRepository scholarshipRepository;
    @Override
    public ArrayList<Scholarship> getAllScholarship() {
        return (ArrayList<Scholarship>) scholarshipRepository.findAll();
    }

    @Override
    public Scholarship updateScholarship(Scholarship scholarship) {
        Scholarship updatedScholarship = scholarshipRepository.getById(scholarship.getScholarshipId());
        if(scholarship.getScholarshipName() != null){
            updatedScholarship.setScholarshipName(scholarship.getScholarshipName());
        }
        if(scholarship.getScholarshipDescription()!= null){
            updatedScholarship.setScholarshipDescription(scholarship.getScholarshipDescription());
        }
        return updatedScholarship;
    }
}
