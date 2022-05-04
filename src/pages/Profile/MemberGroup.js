import axios from "../../axios";
import { useState, useEffect, useCallback} from 'react';
import Select from 'react-select'
import { LoadingSpinner } from "../../component/Loader/Loader";
import { Button, ModalBody } from "react-bootstrap";
import MemberGroupShow from "./MemberGroupShow";
import { Modal } from "react-bootstrap";
import AddMemberGroup from "./AddMemberGroup";
import RemoveMemberGroup from "./RemoveMemberGroup";

export default function MemberGroup(props){

  





return(
  <div>
    <span>

      <AddMemberGroup id = {props.id} groups = {props.groups} memberGroups = {props.memberGroups} />


      
    </span>

    <span>


      <RemoveMemberGroup id = {props.id} groups = {props.groups} memberGroups = {props.memberGroups} />


      
    </span>


  </div>
)

}