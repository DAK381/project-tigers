package com.nafa.tiger.service;

import com.nafa.tiger.entity.Staff;
import com.nafa.tiger.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Staff getById(Long staffId) {
        return staffRepository.getById(staffId);
    }

    public Staff updateStaff(Long staffId, Staff staff) {
        Staff staff1 = staffRepository.getById(staffId);
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
            if(staff1.getPosition()!= null){
                staff1.setPosition(staff.getPosition());
            }
        }
        return staff1;
    }

    public String deleteStaff(Long staffId) {
        staffRepository.deleteById(staffId);
        return "Deleted";
    }
}