package com.nafa.tiger.controller;

import com.nafa.tiger.entity.About;
import com.nafa.tiger.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class AboutController {
    @Autowired
    AboutService aboutService;

    @PostMapping("/about/add")
    public String addAbout(About about){
        return aboutService.add(about);
    }

    @PutMapping("/about/update/{aboutId}")
    public String updateAbout(@PathVariable("aboutId") Long aboutId, @RequestBody About about){
        return aboutService.update(aboutId,about);
    }
}
