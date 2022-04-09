import FormMemberSearch from "./FormMemberSearch";
import { useState } from "react";
import AdminMemberSearchFirstName from "./AdminMemberSearchFirstName";
import AdminMemberGraduationYear from "./AdminMemberGraduationYear";
import AdminMemberGroup from "./AdminMemberGroup";
import AdminMemberSearchLastName from "./AdminMembersSearchLastName";
import AdminAllMembers from "../Admin/AdminAllMembers";

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

                }
    
    ]);
  };

  const submissionStatus = (status) =>{
      setSubmitted(status)
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
                    
                    
                    <AdminMemberSearchFirstName name = {query.firstName} />
                    <AdminMemberSearchLastName name = {query.lastName} />
                    <AdminMemberGroup name = {query.group} />
                    <AdminMemberGraduationYear name = {query.graduationYear} />

                    </div>                  
                            )


                          })
                        }  

        </div>
    )
}


      

                   
     

}

export default FilteredData;