package com.nafa.tiger.service;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.entity.Group;
import com.nafa.tiger.entity.Guest;
import com.nafa.tiger.entity.User;
import com.nafa.tiger.repository.EventRepository;
import com.nafa.tiger.repository.GuestRepository;
import com.nafa.tiger.repository.MemberRepositrory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;

@Service
@Transactional
public class EventServiceImp  implements EventService{

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private MemberRepositrory memberRepositrory;
    @Autowired
    private GuestRepository guestRepository;
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
    public Events update(Long eventId,Events event) {
        Events updatedEvent = eventRepository.findById(eventId).get();

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

            updatedEvent.setEventDescription(event.getEventDescription());
        }
        if(event.getStartTime() != null){
            updatedEvent.setStartTime(event.getStartTime());
        }
        if(event.getEndTime()!=null){
            updatedEvent.setEndTime(event.getEndTime());
        }
        
        if(event.getPaymentAmount()!=null){
            updatedEvent.setPaymentAmount(event.getPaymentAmount());
        }
        
        if(event.getEventLocation()!=null){
            updatedEvent.setEventLocation(event.getEventLocation());
        }

        if(event.getEventImage()!=null){
            updatedEvent.setEventImage(event.getEventImage());
        }
        return updatedEvent;
    }

    @Override
    public User addUserToEvent(Long userId, Long eventId) {
        User user = memberRepositrory.findById(userId).get();
        Events events = eventRepository.findById(eventId).get();
        if (!user.getUserEvent().contains(events)) {
         user.getUserEvent().add(events);
        }
        return new User();
    }

    @Override
    public Collection<Events> getEventByMember(Long userId) {
        User user = memberRepositrory.findById(userId).get();
        return user.getUserEvent();
    }

    @Override
    public Collection<User> getMembersByEvent(Long eventId) {
        Events event = eventRepository.findById(eventId).get();
        return event.getEventUser();
    }

    @Override
    public String registerGuest(Guest guest, Long eventId) {
        guestRepository.save(guest);
        guest.getGuestEvent().add(eventRepository.getById(eventId));
        return "Sucess";
    }

    @Override
    public Collection<Guest> getGuestByEvent(Long eventId) {
        Events event = eventRepository.findById(eventId).get();
        return event.getEventGuest();
    }


}
