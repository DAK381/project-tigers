import React from "react";
import { useState } from "react";
import axios from "../../../axios";
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';

import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

import ToolkitProvider, {CSVExport} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

import DeleteLabel from "./DeleteLabel";

import { Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";

export default function LabelList(props){
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

   const users = props.userInfo;
   console.log(users)


const[selectedLabel, setSelectedLabel] = useState();

const addMembers = () => {
  console.log(selectedLabel)
  users.map(
    (userId) =>
    {
      
      axios.put(`/addMemberToPreset/${selectedLabel}/${userId}`)
      .then(
        res => {
          console.log(userId, selectedLabel)
          navigate('/admin-show-label');
        }
        
      ).catch(err => console.log(err))
    }
  )

}

        const columns = [
        {dataField: 'presetId', text: "Label Id", sort: true, filter: textFilter(), hidden:true},
        {dataField: 'presetName', text: "Label Name", sort: true, filter: textFilter()},
        {dataField: 'dateAdded', text: "Added Date", sort: true, filter: textFilter()}
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
              console.log(row.presetId)
              showDetails(row);
              
            }
          }

        const selectRow = {
            mode: 'checkbox',
            clickToSelect: true,
            hideSelectAll: false,
            bgColor: 'gold',
            onSelect: (row, isSelect, rowIndex, e) => {
                setSelectedLabel(row.presetId)
                console.log(selectedLabel)
             
              }

          };

          const navigate = useNavigate();

          
          function showDetails(row){

            console.log(row.presetId)

            navigate('/label-members', {state:
                {
                    id: row.presetId,
                    name: row.presetName,
                    dateAdded: row.dateAdded
                    
                }
            });

           
        }

        return(

            <div>

                <Container>

                  {
                    users && <Button onClick = {addMembers}>
                    Add Members to the Selected Label
                  </Button>
                  }

                  {/* {
                      selectedLabel && <DeleteLabel id = {selectedLabel} />
                  
                      
                  } */}
                  


<ToolkitProvider
  keyField="presetId"
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