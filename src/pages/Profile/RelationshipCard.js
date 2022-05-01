import axios from "../../axios";
import React, { useState, useEffect, useCallback} from 'react';

export default function RelationshipCard(props){

    console.log("made it to here", data);
    const data = props.data;

    

    return(
        <div>
            {data.id}

        </div>
    )

}