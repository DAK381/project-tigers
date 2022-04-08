import AdminNavigation from "./AdminNavigation";
import React from "react";
import { Container, Card, Table} from "react-bootstrap";
import AdminMemberSearchForm from "../Forms/AdminMemberSearchForm";
import { CardColumns } from "reactstrap";
import { useState } from "react";
import { Nav } from 'react-bootstrap';
import AdminMemberView from "./AdminMemberView"; 
import axios from '../../axios';
import { useEffect} from "react";

function AdminMemberSearchFirstName () { 

    const[data, setData] = useState([]);
    async function getData( ){
        axios.get("/admin/allMembers"
            )
            .then(
                (response) =>
                {
                    console.log(response.data)
                     setData(response.data)

                }
            )
    }
    useEffect(() => {
            getData();
        }, []);

        return(
            <div>
                <Nav.Link href="admin-member-search"><h2>Search Members</h2></Nav.Link>
    
               <AdminMemberView data = {data} />  
            </div>
        )
        
}

export default AdminMemberSearchFirstName; 