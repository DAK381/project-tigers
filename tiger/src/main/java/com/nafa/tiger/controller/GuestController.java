package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Guest;
import com.nafa.tiger.service.GuestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GuestController {

    @Autowired
    GuestService guestService;

    @PostMapping("/guest/add")
    public String addGuest(@RequestParam Guest guest){
        return guestService.add(guest);
    }
}
