package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Scholarship;
import com.nafa.tiger.service.ScholarshipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/scholarship")
@CrossOrigin(origins ="*")

public class ScholarshipController {

    @Autowired
    private ScholarshipService scholarshipService;
    @GetMapping("/get-all-scholarship")
    public ArrayList<Scholarship> getAllScholarship(){
        return scholarshipService.getAllScholarship();
    }

    @PutMapping("/update-scholarship/{scholarshipId}")
    public Scholarship updateScholarship(@PathVariable("scholarshipId") Long scholarshipId, @RequestBody Scholarship scholarship){
        return  scholarshipService.updateScholarship(scholarshipId,scholarship);
    }
    @PostMapping("/add-scholarship")
    public String addScholarship(@RequestBody Scholarship scholarship){
        return scholarshipService.addScholarship(scholarship);

    }
    
    @DeleteMapping("/delete/{scholarshipId}")
    public String deleteEvent(@PathVariable("scholarshipId") Long scholarshipId){
        return scholarshipService.deleteScholarship(scholarshipId);
}
}
