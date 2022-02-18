import { useState } from 'react';
import Button from './Button';
import EventCard from './EventCard';

function EventPage(){

  const [components, setComponents] = useState(["Sample Component"]);

  function addComponent() {

    setComponents([...components, "Sample Component"])

  }

    return (
	<div>
		<Button onClick={addComponent} text="Call Component"/>
		{components.map((i) => ( <EventCard /> ))}
	</div>
    );
}

export default EventPage;
