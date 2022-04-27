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

   var data = props.data;

   for (var i = 0; i < data.length; i++) {
    const user = data[i];
    var groupList = "";
    for(var j = 0; j < user.test.length; j ++)
    {
        var group = user.test[j];
        groupList += group.groupName + " "
        
    }

    // console.log(user.firstName + " " + groupList)
    user["groupList"] = groupList;

} 

const[selected, setSelected] = useState([])
    
    
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
                console.log(row.email)
             
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
                <Container fluid>


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