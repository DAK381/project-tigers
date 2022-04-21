import FormMemberSearch from "./FormMemberSearch";
import { useState } from "react";
import AdminMemberSearchFirstName from "./AdminMemberSearchFirstName";
import AdminMemberGraduationYear from "./AdminMemberGraduationYear";
import AdminMemberGroup from "./AdminMemberGroup";
import AdminMemberSearchLastName from "./AdminMembersSearchLastName";
import AdminAllMembers from "../Admin/AdminAllMembers";
import { Button } from "react-bootstrap";




import DataFromAxios from "./DataFromAxios";

function FilteredData()
{

    const[submitted, setSubmitted] = useState(false)


    const [query, setQuery] = useState([
        {firstName: "",
        lastName: "",
        group: "",
        graduationYear: ""
        }]);


  const searchQuery = (query1) => {
    setQuery([
                {
                    firstName: query1.firstName,
                    lastName: query1.lastName,
                    group: query1.group,
                    graduationYear: query1.graduationYear

                }]
    
    );
  };

  const submissionStatus = (status) =>{
      setSubmitted(status)
  }

  const sub = (q) =>{
    if(q.length > 0){
      return true;
    }
  }

  
  if(!submitted)
  {
  return (
    <div className="App">
      <FormMemberSearch searchQuery ={searchQuery} submissionStatus={ submissionStatus }/>
      <AdminAllMembers />
      </div>
  )

 

}

else{
    return(
        <div>
             <FormMemberSearch searchQuery ={searchQuery} submissionStatus={ submissionStatus }/>
             {
              query.map(query =>
                {
                    return (
                    <div>
                    
                    <Button onClick={() => setSubmitted(false)}>Show all Members</Button>
                    
                    
                    {sub(query.firstName) && (
                    <p><AdminMemberSearchFirstName name = {query.firstName} /></p>
                    )}
                      
                   
                    {sub(query.lastName) && (
                    <p>  <AdminMemberSearchLastName name = {query.lastName} /></p>
                    )}

                    {sub(query.group) && (
                    <p><AdminMemberGroup name = {query.group} /></p>
                    )}

                    {sub(query.graduationYear) && (
                    <p><AdminMemberGraduationYear name = {query.graduationYear} /></p>
                    )}


                  
                    
                    

                    </div>                  
                            )


                          })
                        }  

                        {/* <DataFromAxios data = {query} /> */}


        </div>
    )
}
  

}

export default FilteredData;