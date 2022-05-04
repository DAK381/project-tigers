package com.nafa.tiger.service;

import com.nafa.tiger.entity.Guest;
import com.nafa.tiger.repository.GuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.SecondaryTable;

@Service
public class GuestService {

    @Autowired
    GuestRepository guestRepository;
    public String add(Guest guest) {
        guestRepository.save(guest);
        return "Saved";
    }
}
