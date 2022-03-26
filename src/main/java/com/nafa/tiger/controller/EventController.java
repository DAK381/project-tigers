package com.nafa.tiger.controller;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/event")
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
    @GetMapping("event/{eventId}")
    public Events getEventById(@PathVariable("eventId") Long eventId){
        return eventService.getEventById(eventId);
    }
    @PutMapping("update/{event}")
    public Events updateEvent(@PathVariable("eventId") Events event){
        return eventService.update(event);
    }
}
