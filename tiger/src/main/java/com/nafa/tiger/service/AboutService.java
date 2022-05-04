package com.nafa.tiger.service;

import com.nafa.tiger.entity.About;
import com.nafa.tiger.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class AboutService {
    @Autowired
    AboutRepository aboutRepository;

    public String add(About about) {
        aboutRepository.save(about);
        return "sucessfully added";
    }

    public String update(Long aboutId, About about) {
        About aboutDetails = aboutRepository.getById(aboutId);
        if (aboutDetails != null && about.getDescription()!= null){
            aboutDetails.setDescription(about.getDescription());
        }
        return "updated";
    }

}
