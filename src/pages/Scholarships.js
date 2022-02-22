import { useState } from 'react';
import Button from './Button';
import ScholarshipCard from './ScholarshipCard';

function Scholarship(){

  const [components, setComponents] = useState(["Sample Component"]);

  function addComponent() {

    setComponents([...components, "Sample Component"])

  }

    return (
	<div>
		<Button onClick={addComponent} text="Call Component"/>
		{components.map((i) => ( <ScholarshipCard /> ))}
	</div>
    );
}
export default Scholarship;
