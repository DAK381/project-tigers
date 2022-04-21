import { useState } from "react";
import FilteredData from "./FIlteredData";
export default function FormMemberSearch({searchQuery, submissionStatus}) {

    const[submitted, setSubmitted] = useState(false)

  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    group: "",
    graduationYear: ""
  });


  const [queryStatus, setQueryStatus] = useState({
    firstNameStatus: false,
    lastNameStatus: false,
    groupStatus: false,
    graduationYearStatus: false
  });



  const handleChange = (event) => {
    setQuery({ ...query, [event.target.name]: event.target.value });

  };

  const handleSubmit = (event) => {
    console.log(query.firstName)
    event.preventDefault();

    searchQuery(query);

    setSubmitted(true);
  
    submissionStatus(submitted);
    // setQuery({ firstName: "", lastName: "", group: "", graduationYear: ""});
    
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        
       
          <input
            type="text"
            name="firstName"
            placeholder="Search by First Name"
            value={query.firstName}
            onChange={handleChange}
          />
       
       
          <input
            type="text"
            name="lastName"
            placeholder= "Search by Last Name"
            value={query.lastName}
            onChange={handleChange}

          />
      
       
          <input
            type="text"
            name="group"
            placeholder= "Search by Group"
            value={query.group}
            onChange={handleChange}

          />
      



      
          <input
            type="text"
            name="graduationYear"
            placeholder="Search by Graduation Year"
            value={query.graduationYear}
            onChange={handleChange}

          />

      


        
          <button>Search Member</button>
       
      </form>
    </div>
  );
}