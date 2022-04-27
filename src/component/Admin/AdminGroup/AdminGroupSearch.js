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

export default function AdminGroupSearch(props){
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

   
const[selected, setSelected] = useState([])
    
    
    const columns = [
        {dataField: 'id', text: "ID", hidden: true},
        {dataField: 'groupName', text: "Group Name", sort: true, filter: textFilter()},
        {dataField: 'groupYear', text: "Year", sort: true, filter: textFilter()},

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

        // const rowEvents = {
        //     onDoubleClick: (e, row, rowIndex) => {
        //       showDetails(row);
        //     }
        //   }

        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            hideSelectAll: false,
            bgColor: 'gold',
            // onSelect: (row, isSelect, rowIndex, e) => {
            //     setSelected((prev) => [...prev, row.email])
            //     console.log(row.email)
             
            //   }

          };

          const navigate = useNavigate();
          
        //   function showDetails(row){
              
        //     navigate('/admin-member-profile', {state:
        //         {
        //             id: row.id
        //         }
        //     });

          
        // }
        
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
          //rowEvents={rowEvents}
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