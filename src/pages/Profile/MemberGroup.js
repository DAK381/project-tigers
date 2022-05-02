import axios from "../../axios";
import { useState, useEffect, useCallback} from 'react';
import Select from 'react-select'
import { LoadingSpinner } from "../../component/Loader/Loader";
import { Button } from "react-bootstrap";



export default function MemberGroup(props){

    const[data, setData] = useState();

  const[options, setOptions] = useState();

  const [current, setCurrent] = useState([]);

  const [currentGroup, setCurrentGroup] = useState([]);

  const[addSelected, setAddSelected] = useState([]);

  const[removeSelected, setRemoveSelected] = useState([]);


  const[final, setFinal] = useState();


  const[loading, setLoading] = useState(true);

  async function getGroupData( ){
    // axios.get(`/search/membersGroups/${props.id}`
    axios.get("/search/allgroup")
        .then(
            (response) =>
            {

                 setData(response.data)

     
               const options = data && data.map(d => ({

                    "value" : d.groupId,
                    "label" : d.groupName + " " + d.groupYear
              
                  }))

                  setOptions(options)
                

            }
            
        )
}

async function getCurrent( ){
    axios.get(`/search/membersGroups/${props.id}`
   )
        .then(
            (response) =>
            {
                setCurrentGroup(response.data)
               const current = currentGroup && currentGroup.map(d => ({

                    "value" : d.groupId,
                    "label" : d.groupName + " " + d.groupYear
              
                  }))

                  setCurrent(current)
                  setLoading(false)
                

            }
            
        )
}

console.log(options)
console.log(current)

useEffect(() => {
    getGroupData();
    getCurrent()
    

}, [props.id]);


const onOptionChangeAdd = useCallback(
    (option) => {
      console.log("this is ", option);
      setAddSelected(option)
    },
    []

    
  );

  const onOptionChangeRemove = useCallback(
    (option) => {
      console.log("this is ", option);
      setRemoveSelected(option)
      
    },
    []

    
  );

 
function addGroup(e){
    e.preventDefault();

    addSelected.map(
    (group) => {
        axios.put(`/addUserToGroup/${group.value}/${props.id}`).then(() => {
            window.location.reload();
        }).catch((e) => {
            console.log(e);
        });

    }
    )
}



return(

    <div>

    
    {loading?

    <LoadingSpinner />

    :
<div>


    <h2>
        Select groups you want to add yourselves to.
    </h2>
    <Select

    
       options={options}
       isMulti
       onChange={(e) => onOptionChangeAdd (e)}
     />
   
   <Button variant="secondary" onClick={addGroup}>
										Save
									</Button>
    

<h2>
    Select groups you want to remove yourselves from
</h2>


     <Select


       options={current}
       isMulti
       onChange={(e) => onOptionChangeRemove(e)}
     />

     </div>
     }

<div>

{
         current.map(
             (group) => (
                 <list key = {group.groupId}>
                     {group.groupName} {group.groupYear}
                 </list>
             )
         )
     }

</div>
     


</div>


     
     
     
)


}