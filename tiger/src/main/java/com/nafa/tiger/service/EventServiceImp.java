package com.nafa.tiger.service;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
@Service
@Transactional
public class EventServiceImp  implements EventService{

    @Autowired
    private EventRepository eventRepository;
    @Override
    public ArrayList<Events> getAllEvents() {
        return (ArrayList<Events>) eventRepository.findAll();
    }

    @Override
    public String addEvent(Events events) {
        eventRepository.save(events);
        return "event saved";
    }

    @Override
    public String deleteEvent(Long eventId) {
        eventRepository.deleteById(eventId);
        return "deleted";
    }

    @Override
    public Events getEventById(Long eventId) {
        return eventRepository.findById(eventId).get();
    }

    @Override
    public Events update(Events event) {
        Events updatedEvent = eventRepository.findById(event.getEventId()).get();
        if (event.getEventDate() != null){
            updatedEvent.setEventDate(event.getEventDate());
        }
        if(event.getEventDay() != null){
            updatedEvent.setEventDay(event.getEventDay());
        }
        if(event.getEventName() != null){
            updatedEvent.setEventName(event.getEventName());
        }
        if(event.getEventDescription() != null){
            updatedEvent.setEventDescription(updatedEvent.getEventDescription());
        }
        if(event.getStartTime() != null){
            updatedEvent.setStartTime(event.getStartTime());
        }
        if(event.getEndTime()!=null){
            updatedEvent.setEndTime(event.getEndTime());
        }
        return updatedEvent;
    }


}
