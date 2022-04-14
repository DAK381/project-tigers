package com.nafa.tiger.service;

import com.nafa.tiger.entity.Events;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public interface EventService {
    ArrayList<Events> getAllEvents();

    String addEvent(Events events);

    String deleteEvent(Long eventId);

    Events getEventById(Long eventId);

    Events update(Long eventId, Events event);
}
