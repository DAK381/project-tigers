import React from "react";
import { useState } from "react";


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



export default function GuestList(props)
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

   var data = props.data;
  
   

const[selectedEmail, setSelectedEmail] = useState([])
const[selectedId, setSelectedId] = useState([])
    
    
    const columns = [
        {dataField: 'id', text: "ID", hidden: true},
        {dataField: 'firstName', text: "First Name", sort: true, filter: textFilter()},
        {dataField: 'maidenName', text: "Maiden Name", sort: true, filter: textFilter()},
        {dataField: 'lastName', text: "Last Name", sort: true,filter: textFilter()},
        {dataField: 'email', text: "Email", filter: textFilter()},
        {dataField: 'phone', text: "Phone", filter: textFilter()},

    ]


    const pagination = paginationFactory(
        {
            page: 1,
            sizePerPage: 7,
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



        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            hideSelectAll: false,
            bgColor: 'gold',
            onSelect: (row, isSelect, rowIndex, e) => {
               var addedEmails = selectedEmail;
               var addedId = selectedId;
                if(isSelect){

                    
                    if(!selectedEmail.includes({ value: row.id, label: row.email }))
                {
                    addedEmails = [
                        ...selectedEmail, {
                            value: row.id,
                            label: row.email
        
                        }]

                        addedId =[...selectedId, row.id]

                }

                else{
                    addedEmails = [...selectedEmail]
                    addedId =[...selectedId]

                }

                }

                else{

                    if(addedEmails.lenght !== 0){

                        addedEmails = addedEmails.filter(
                            (e) => e.value !== row.id
                        )

                        addedId = addedId.filter(
                            (e) => e != row.id
                        )
                        
                    }
                    
                }

                setSelectedEmail(addedEmails)
                

                setSelectedId(
                   addedId
                )
                
                
             
              }

          }

          console.log(selectedEmail)

          const navigate = useNavigate();
          
          
        
        function emailPeople(){
            navigate('/admin-contact', {state:
                {
                    arrayId: selectedEmail
                }
            });

        }


      


        return(

            <div>
                <Container fluid>

{/* <AdminAddMemberToGroup selected = {selectedId} /> */}

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