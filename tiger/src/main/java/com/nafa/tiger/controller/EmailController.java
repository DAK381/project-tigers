package com.nafa.tiger.controller;

import com.nafa.tiger.entity.EmailInformation;
import com.nafa.tiger.service.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmailController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("/admin/send-email")
    public String sendEmail(@RequestBody EmailInformation emailInformation){
        return emailSenderService.sendSimpleEmail(emailInformation.getToEmail(),emailInformation.getSubject(),emailInformation.getBody());

    }
}
