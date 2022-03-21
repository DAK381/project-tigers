import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import DataTable from 'react-data-table-component';
import AdminMemberSearchId from './AdminSearchId';
import AdminMemberSearchFirstName from './AdminMemberSearchFirstName';
import AdminMemberSearchLastName from './AdminMembersSearchLastName';

function AdminMemberSearchForm () { 

    return(

        <div>
            <AdminMemberSearchId />

             <AdminMemberSearchFirstName />
            <AdminMemberSearchLastName />


        </div>
        
    )

    
    
}

export default AdminMemberSearchForm;