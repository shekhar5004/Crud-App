import {FormGroup,FormControl,Input,InputLabel,makeStyles, Typography, Button} from '@material-ui/core'
import React from 'react'
import { useState ,useEffect} from 'react';
import { getUsers,editUsers } from '../service/api';
import { useHistory, useParams } from 'react-router';

const useStyle=makeStyles({
    container :{
        width : '50%',
        margin : '5% 0 0 25%',
        '&>*' :{
           marginTop: 20 
        } 
    }
})
const initialvalues={
    name : '',
    username : '',
    email: '',
    phone: ''
};
function EditUsers() {
    const classes=useStyle();
    const[initial,setinitial]=useState(initialvalues);
    const history=useHistory();
    const {id}=useParams();

    useEffect(() => {
      loaduserdata();
    }, [])
    const loaduserdata = async () =>{
       const response=await getUsers(id);
       setinitial(response.data);
    }
    const onvaluechange = (e) =>{
      setinitial({...initial,[e.target.name]:[e.target.value]})
    }

    const onclickchange = async () =>{

        await editUsers(id,initial);
        history.goBack();
    }
    
    return (
       <FormGroup className={classes.container}>
             <Typography variant="h4">Edit User</Typography>
           <FormControl >
              <InputLabel>{initial.name}</InputLabel>
              <Input  onChange={onvaluechange} name="name"/>   
           </FormControl>
           <FormControl>
              <InputLabel>{initial.username}</InputLabel>
              <Input onChange={onvaluechange} name="username"/> 
           </FormControl>
           <FormControl>
              <InputLabel>{initial.email}</InputLabel>
              <Input onChange={onvaluechange} name="email"/> 
           </FormControl>
           <FormControl>
              <InputLabel>{initial.phone}</InputLabel>
              <Input onChange={onvaluechange} name="phone"/>
           </FormControl>
           <Button variant="contained" onClick={onclickchange}>Edit User</Button>
       </FormGroup>
    )
}

export default EditUsers;