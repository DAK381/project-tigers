package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.Guest;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@RequestMapping("admin/event")
@CrossOrigin(origins ="*")

public class EventController {
    @Autowired
    private EventService eventService;

    @GetMapping("/all-event")
    public ArrayList<Events> getAllEvents(){
        return eventService.getAllEvents();
    }
    @PostMapping("add-event")
    public String addEvent(@RequestBody Events events){
        return eventService.addEvent(events);
    }
    @DeleteMapping("/delete/{eventId}")
    public String deleteEvent(@PathVariable("eventId") Long eventId){
        return eventService.deleteEvent(eventId);
    }
    @GetMapping("/{eventId}")
    public Events getEventById(@PathVariable("eventId") Long eventId){
        return eventService.getEventById(eventId);
    }
    
    @PutMapping("update/{eventId}")
    public Events updateEvent(@PathVariable("eventId") Long eventId,@RequestBody Events event){
        return eventService.update(eventId, event);
    }
    
    @PutMapping("/userRsvp/{userId}/{eventId}")
    public User addUserToGroup( @PathVariable("userId") Long userId,@PathVariable("eventId") Long eventId){
        return eventService.addUserToEvent(userId,eventId);
    }
    
    
    @GetMapping("/search/membersEvent/{userId}")
    public Collection<Events> getGroupsByMember(@PathVariable("userId") Long userId){
        return eventService.getEventByMember(userId);
    }
    
    
    @GetMapping("/search/membersByEvent/{eventId}")
    public Collection<User> getMembersByEvent(@PathVariable("eventId") Long eventId){
        return eventService.getMembersByEvent(eventId);
    }

    ///for the Guest USer
    @PostMapping("/register/guest/{eventId}")
    public String registerGuest(@RequestBody Guest guest, @PathVariable("eventId") Long eventId){
        return eventService.registerGuest(guest,eventId);

    }

    @GetMapping("/search/guestByEvent/{eventId}")
    public Collection<Guest> getGuestByEvent(@PathVariable("eventId") Long eventId){
        return eventService.getGuestByEvent(eventId);
    }
}
