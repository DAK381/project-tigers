package com.nafa.tiger.service;

import com.nafa.tiger.entity.Scholarship;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

public interface ScholarshipService {
    ArrayList<Scholarship> getAllScholarship();

    Scholarship updateScholarship(Scholarship scholarship);
}
