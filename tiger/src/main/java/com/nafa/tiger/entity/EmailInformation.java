package com.nafa.tiger.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;

@Data
@AllArgsConstructor
public class EmailInformation {
    private String toEmail;
    private String subject;
    private String body;
}
