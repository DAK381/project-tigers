package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Scholarship;
import com.nafa.tiger.service.ScholarshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/scholarship")
public class ScholarshipController {

    @Autowired
    private ScholarshipService scholarshipService;
    @GetMapping("/get-all-scholarship")
    public ArrayList<Scholarship> getAllScholarship(){
        return scholarshipService.getAllScholarship();
    }

    @PutMapping("/update-scholarship")
    public Scholarship updateScholarship(Scholarship scholarship){
        return  scholarshipService.updateScholarship(scholarship);
    }
}
