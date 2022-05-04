package com.nafa.tiger.controller;

import com.nafa.tiger.entity.About;
import com.nafa.tiger.entity.Events;
import com.nafa.tiger.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*")
public class AboutController {
    @Autowired
    AboutService aboutService;

    @PostMapping("/about/add")
    public About addAbout(@RequestBody About about){
        return aboutService.add(about);
    }

    @PutMapping("/about/update/{id}")
    public String updateAbout(@PathVariable("id") Long id, @RequestBody About about){
        return aboutService.update(id,about);
    }
    
    @GetMapping("about/{id}")
    public About getEventById(@PathVariable("id") Long id){
        return aboutService.getAboutById(id);
    }
    
}
