import { TableBody, TableCell,TableHead,TableRow,Table ,makeStyles,Button} from '@material-ui/core';
import { deleteUser, getUsers } from '../service/api';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';


const useStyles=makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *':{
            background: "#000000",
            color: "#ffffff",
            fontSize: 20
        }
    }
})
function AllUser() {
    const classes=useStyles();

    const[users,setUsers]=useState([]);
    useEffect(() =>{
      usergetfunction();
    },[])
    const usergetfunction = async () =>{
       const response=await getUsers();
       setUsers(response.data); 
    }
    const ondeleteUser = async (id) => {
        await deleteUser(id);
        usergetfunction();
    }
    return (
          <>
            <Header/>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                 { users.map(user =>(
                    <TableRow>
                     <TableCell>{user.id}</TableCell>
                     <TableCell>{user.name}</TableCell>
                     <TableCell>{user.username}</TableCell>
                     <TableCell>{user.email}</TableCell>
                     <TableCell>{user.phone}</TableCell>
                     <TableCell>
                      <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{marginRight :10}}>Edit</Button>
                      <Button variant="contained" onClick={() => ondeleteUser(user.id)} color="secondary">Delete</Button>
                     </TableCell>
                    </TableRow>
                  ))                  
                 }
                </TableBody>
            </Table>  
          </>    
    )
}

export default AllUser
