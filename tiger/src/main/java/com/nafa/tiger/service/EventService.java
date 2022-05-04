package com.nafa.tiger.service;

import com.nafa.tiger.entity.Events;
import com.nafa.tiger.entity.Guest;
import com.nafa.tiger.entity.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public interface EventService {
    ArrayList<Events> getAllEvents();

    String addEvent(Events events);

    String deleteEvent(Long eventId);

    Events getEventById(Long eventId);

    Events update(Long eventId, Events event);

    User addUserToEvent(Long userId, Long eventId);

    Collection<Events> getEventByMember(Long userId);

    Collection<User> getMembersByEvent(Long groupId);

    String registerGuest(Guest guest, Long eventId);

    Collection<Guest> getGuestByEvent(Long eventId);
}
