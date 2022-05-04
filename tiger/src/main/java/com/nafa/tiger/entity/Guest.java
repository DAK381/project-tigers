package com.nafa.tiger.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Guest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long guest_id;
    private String email;
    private String firstName;
    private String middleName;
    private String lastName;
    private String phoneNumber;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name= "guest_event",
            joinColumns= @JoinColumn(name="guest_id", referencedColumnName = "guest_id"),
            inverseJoinColumns = @JoinColumn(name = "eventId", referencedColumnName = "eventId"))
    @JsonIgnore
    private Collection<Events> guestEvent = new ArrayList<>();

}
