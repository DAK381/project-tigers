import { useState } from 'react';
import Button from './Button';
import ScholarshipCard from './ScholarshipCard';
import ScholarshipData from './ScholarshipData';

function Scholarship(){

  return(
    <div>
      <h1>
        Scholarships
      </h1>
      <ScholarshipData />
    </div>
  )
}
export default Scholarship;
