package com.nafa.tiger.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Scholarship {
    private Long scholarshipId;
    private String scholarshipName;
    private String scholarshipDescription;

}
