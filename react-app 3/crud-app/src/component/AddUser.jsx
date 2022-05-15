import { Input, InputLabel, Typography,FormControl,FormGroup,makeStyles, Button} from '@material-ui/core';
import React,{useState}  from 'react';
import {addUser} from '../service/api.js'
import Header from './Header';
import { useHistory } from 'react-router';

const useStyles=makeStyles({
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

function AddUser() {
    const classes=useStyles();
    const history=useHistory();
    const[initial,setinitial]=useState(initialvalues);
    
    const onvaluechange = (e) =>{
        setinitial({...initial,[e.target.name]:[e.target.value]})
    }
    const ondefaultchange = async () =>{
      await addUser(initial);
      history.goBack();
    }
    return (
      <>
      <Header/>
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
              <InputLabel>Name</InputLabel>   
              <Input onChange={onvaluechange} name="name"/>
            </FormControl>           
            <FormControl>
              <InputLabel>UserName</InputLabel>   
              <Input onChange={onvaluechange} name="username"/>   
            </FormControl>           
            <FormControl>
              <InputLabel>Email</InputLabel>   
              <Input onChange={onvaluechange} name="email"/>  
            </FormControl>           
            <FormControl>
              <InputLabel>Phone</InputLabel>   
              <Input onChange={onvaluechange} name="phone"/>   
            </FormControl>       
            <Button variant="contained" onClick={ondefaultchange}>AddUser</Button>    
        </FormGroup>
      </>
    )
}

export default AddUser;
