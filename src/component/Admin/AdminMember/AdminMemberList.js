import React from "react";
import { useState } from "react";
import axios from '../../../axios';
import { useEffect} from "react";

import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import ToolkitProvider, {CSVExport} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';


import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

// import paginationFactory from 'react-bootstrap-table2-paginator';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
// import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';



export default function AdminMemberList(props)
{
    
    const { ExportCSVButton } = CSVExport;
    
    const MyExportCSV = (props) =>{
        const handleClick= () =>{
            props.onExport();
        };
        return (
            <div>
                <Button onClick = {handleClick}>Export to CSV</Button>
            </div>
        )
    }    

    const[groups, setGroups] = useState([]);
    const[selectedGroup, setGroup] = useState([]);

    const handleGroupChange = (event) => {
        setGroup(event.target.value);
      };

      React.useEffect(() => {
        axios.get("/search/allgroup").then(res => {
            setGroups(res.data)
        }).catch(err => console.log(err))
        
        
    }, [])
    


// const[userData, setUserData] = useState([props.data]);
// const[userGroup, setGroup] = useState([]);

//     props.data.map(
//         (data) =>{
//             data.test.map(
//                 (group) => {
//                     setGroup(userGroup => (
//                         [
//                             ...userGroup, group.groupName
//                         ]
//                     ))

                    
//                 }

                
//             )
//             setUserData(
//                 data => [
//                     ...userData, userGroup
//                 ]
//             )

//         }
//     )

//     console.log(userData)

// {groups.map(
//     (group) =>
//     {
//         console.log(group.groupName)
//     }
// )}




    
    const columns = [
        {dataField: 'id', text: "ID", hidden: true},
        {dataField: 'firstName', text: "First Name", sort: true, filter: textFilter()},
        {dataField: 'maidenName', text: "Maiden Name", sort: true, filter: textFilter()},
        {dataField: 'lastName', text: "Last Name", sort: true,filter: textFilter()},
        {dataField: 'email', text: "Email", filter: textFilter()},
        {dataField: 'graduatedYear', text: "Graduation Year", sort: true, filter: textFilter()},
        {dataField: 'groupList', text: "Group", sort: true, filter: textFilter()}
        


    ]


    const pagination = paginationFactory(
        {
            page: 1,
            sizePerPage: 10,
            lastPageText: 'Last Page',
            firstPageText: 'First Page',
            nextPageText: 'Next Page',
            prePageText: 'Prev Page',
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerpga){
                console.log('page', page);
                console.log('sizePerPage', this.sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage){
                console.log('page', page);
                console.log('sizePerPage', this.sizePerPage);
            }


        }
    )

    const[selected, setSelected] = useState([])


        const rowEvents = {
            onDoubleClick: (e, row, rowIndex) => {
              showDetails(row);
            }
          }

        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            hideSelectAll: false,
            bgColor: 'gold',
            onSelect: (row, isSelect, rowIndex, e) => {
                setSelected((prev) => [...prev, row.email])
                console.log(row.test)
             
              }

          };

          const navigate = useNavigate();
          
          function showDetails(row){
              
            navigate('/admin-member-profile', {state:
                {
                    id: row.id
                }
            });

          
        }
        
        function emailPeople(){
            navigate('/admin-member-email', {state:
                {
                    arrayId: selected
                }
            });

        }

        return(

            <div>
                <Container>

                {/* <div>Filter by Group:</div>
        <select
          value={selectedGroup}
          onChange={handleGroupChange}
         
        >

{groups.map(
    (group) =>
    {
        // <option key = {group.groupId} value = {group.groupName}>{group.groupName}
        // </option> 


    }
)}
          
        </select>
       */}

<Button onClick = {emailPeople}>Email Selected</Button>
<ToolkitProvider
  keyField="id"
  data={ props.data}
  columns={ columns }
  exportCSV={ { onlyExportFiltered: true, exportAll: false } }
  search
>

    
  {
    props => (
      <div>
        <MyExportCSV { ...props.csvProps } />
        <hr />
        
        <BootstrapTable
          { ...props.baseProps }
          pagination={ pagination }
          filter={ filterFactory() }
          rowEvents={rowEvents}
          selectRow = {selectRow}
        />
      </div>
    )
  }
</ToolkitProvider>

            </Container>
            </div>

            


        )


}