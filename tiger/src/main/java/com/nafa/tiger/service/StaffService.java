package com.nafa.tiger.service;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.entity.Staff;
import com.nafa.tiger.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import javax.transaction.Transactional;

@Service
@Transactional
public class StaffService {

    @Autowired
    StaffRepository staffRepository;

    public String addStaff(Staff staff) {
        staffRepository.save(staff);
        return "staff saved sucessfully";
    }

    public Staff getById(Long id) {
        return staffRepository.getById(id);
    }
    
    public ArrayList<Staff> getAllStaff() {
        return (ArrayList<Staff>) staffRepository.findAll();
    }

    public Staff updateStaff(Long id, Staff staff) {
        Staff staff1 = staffRepository.getById(id);
        if(staff1!= null){
            if(staff.getFirstName()!= null){
                staff1.setFirstName(staff.getFirstName());
            }
            if(staff.getLastName()!= null){
                staff1.setLastName(staff.getLastName());
            }
            if(staff.getEmail()!= null){
                staff1.setEmail(staff.getEmail());
            }
            if(staff.getMiddleName()!= null){
                staff1.setMiddleName(staff.getMiddleName());
            }
            if(staff.getPhone()!= null){
                staff1.setPhone(staff.getPhone());
            }
            if(staff.getPosition()!= null){
                staff1.setPosition(staff.getPosition());
            }
        }
        return staffRepository.save(staff1);
    }

    public String deleteStaff(Long id) {
        staffRepository.deleteById(id);
        return "Deleted";
    }
}
