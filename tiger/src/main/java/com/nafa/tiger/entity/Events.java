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
    private String eventDate;
    private String eventDay;
    private String startTime;
    private String endTime;
    private String eventDescription;
    private String paymentAmount;
    private String eventLocation;
    private String eventImage;
    private String addedDate;
    private ArrayList <String> photosFromEvents;
    @ManyToMany(mappedBy = "userEvent", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<User> eventUser = new ArrayList<>();


    @ManyToMany(mappedBy = "guestEvent", cascade = CascadeType.ALL)
    @JsonIgnore
    private Collection<Guest> eventGuest = new ArrayList<>();

}
