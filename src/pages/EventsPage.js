import { useState } from 'react';
import Button from './Button';
import EventCard from './EventCard';
import EventData from './EventData';

function EventPage({data}){

  return(
    <div>
      <h1>
        Events
      </h1>
      <EventData />
    </div>
  )
}

export default EventPage;
