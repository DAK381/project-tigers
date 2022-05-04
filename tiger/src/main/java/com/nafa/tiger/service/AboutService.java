package com.nafa.tiger.service;

import com.nafa.tiger.entity.About;
import com.nafa.tiger.entity.Events;
import com.nafa.tiger.repository.AboutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
@Transactional
public class AboutService {
    @Autowired
    AboutRepository aboutRepository;

    public About add(About about) {
        return aboutRepository.save(about);
        
    }
    
  
    public About getAboutById(Long id) {
        return aboutRepository.findById(id).get();
    }

    public String update(Long id, About about) {
        About aboutDetails = aboutRepository.getById(id);
        if (aboutDetails != null && about.getDescription()!= null){
            aboutDetails.setDescription(about.getDescription());
        }
        return "updated";
    }

}
