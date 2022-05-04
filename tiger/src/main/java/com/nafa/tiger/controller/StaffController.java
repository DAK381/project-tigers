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

    @GetMapping("/search/staff/{id}")
    public Staff getById(@PathVariable("id") Long id){
        return staffService.getById(id);
    }

    @CrossOrigin(origins ="*")
    @PutMapping("staff/update/{id}")
    public Staff updateStaff(@PathVariable("id") Long id, @RequestBody Staff staff){
        return staffService.updateStaff(id,staff);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteStaff(@PathVariable("id")Long id){
        return staffService.deleteStaff(id);
    }
}
