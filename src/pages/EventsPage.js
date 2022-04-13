import { useState } from 'react';
import Button from './Button';
import EventCard from './EventCard';
import EventData from './EventData';

function EventPage(props){

  return(
    <div>
      <h1>
        Events
      </h1>
      <EventData admin = {false}/>
    </div>
  )
}

export default EventPage;
