package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.entity.Staff;
import com.nafa.tiger.service.StaffService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
public class StaffController {

    @Autowired
    StaffService staffService;
    
    @GetMapping("/all-staff")
    public ArrayList<Staff> getAllStaff(){
        return staffService.getAllStaff();
    }

    @PostMapping("/staff/add")
    public String addStaff(@RequestBody Staff staff){
        return staffService.addStaff(staff);
    }

    @GetMapping("/search/staff/{staffId}")
    public Staff getById(@PathVariable("staffId") Long staffId){
        return staffService.getById(staffId);
    }

    @PutMapping("/update/{staffId}")
    public Staff updateStaff(@PathVariable("staffId") Long staffId, @RequestBody Staff staff){
        return staffService.updateStaff(staffId,staff);
    }
    @DeleteMapping("/delete/{staffId}")
    public String deleteStaff(@PathVariable("staffId")Long staffId){
        return staffService.deleteStaff(staffId);
    }
}
