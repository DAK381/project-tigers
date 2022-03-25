import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import DataTable from 'react-data-table-component';
import AdminMemberSearchId from './AdminSearchId';
import AdminMemberSearchFirstName from './AdminMemberSearchFirstName';
import AdminMemberSearchLastName from './AdminMembersSearchLastName';
import AdminMemberGraduationYear from './AdminMemberGraduationYear';
import AdminMemberGroup from './AdminMemberGroup';

function AdminMemberSearchForm () { 

    return(

        <div>
            <AdminMemberSearchFirstName />
            <AdminMemberSearchLastName />
            <AdminMemberGraduationYear />
            <AdminMemberGroup />


        </div>
        
    )

    
    
}

export default AdminMemberSearchForm;