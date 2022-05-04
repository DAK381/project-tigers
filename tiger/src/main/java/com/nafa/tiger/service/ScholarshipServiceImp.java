package com.nafa.tiger.service;

import com.nafa.tiger.entity.Scholarship;
import com.nafa.tiger.repository.ScholarshipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import javax.transaction.Transactional;

@Service
@Transactional
public class ScholarshipServiceImp implements ScholarshipService{

    @Autowired
    private ScholarshipRepository scholarshipRepository;
    @Override
    public ArrayList<Scholarship> getAllScholarship() {
        return (ArrayList<Scholarship>) scholarshipRepository.findAll();
    }

    @Override
    public Scholarship updateScholarship(Long scholarshipId,Scholarship scholarship) {
        Scholarship updatedScholarship = scholarshipRepository.findById(scholarshipId).get();
        if(scholarship.getScholarshipName() != null){
            updatedScholarship.setScholarshipName(scholarship.getScholarshipName());
        }
        if(scholarship.getScholarshipDescription()!= null){
            updatedScholarship.setScholarshipDescription(scholarship.getScholarshipDescription());
        }
        
        if(scholarship.getDeadline()!= null){
            updatedScholarship.setDeadline(scholarship.getDeadline());
        }
        
        if(scholarship.getFormLink()!= null){
            updatedScholarship.setFormLink(scholarship.getFormLink());
        }
        
        
        if(scholarship.getScholarshipImage()!= null){
            updatedScholarship.setScholarshipImage(scholarship.getScholarshipImage());
        }
        return updatedScholarship;
    }

    @Override
    public String addScholarship(Scholarship scholarship) {
        scholarshipRepository.save(scholarship);
        return "Scholarship saved";
    }
    
    @Override
    public String deleteScholarship(Long scholarshipId) {
        scholarshipRepository.deleteById(scholarshipId);
        return "deleted";
    }
}
