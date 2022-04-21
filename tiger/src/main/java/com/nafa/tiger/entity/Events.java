package com.nafa.tiger.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Events {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long eventId;
    private String eventName;
    private Date eventDate;
    private String eventDay;
    private Time startTime;
    private Time endTime;
    private String eventDescription;
    private String paymentAmount;
    private String eventLocation;
    private String eventImage;
    @ManyToMany(mappedBy = "userEvent", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<User> eventUser = new ArrayList<>();

}
