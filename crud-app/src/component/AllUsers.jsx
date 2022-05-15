import { useEffect,useState } from "react";
import {Table, TableBody, TableCell, TableHead, TableRow,makeStyles, Button} from '@material-ui/core';
import { editUser,getUsers } from "../Service/api";
import {Link} from 'react-router-dom';

const useStyle=makeStyles({
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
const AllUser = () => {

  const [users,setUsers]=useState([]);
  const classes=useStyle();
  useEffect(() => {
      getAllUsers();               
  }, [])
  const getAllUsers = async () =>{
      const response=await getUsers();
      console.log(response.data);
      setUsers(response.data);
  }  
 
  return (
      <Table className={classes.table}>
          <TableHead>
              <TableRow className={classes.thead}>
                  <TableCell>id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>UserName</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Phone</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map(user =>(  
              <TableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.username}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                      <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{marginRight :10}}>Edit</Button>
                      <Button variant="contained" component={Link} color="secondary" >Delete</Button>
                  </TableCell>
              </TableRow>
              ))
            }
          </TableBody>
      </Table>
  )
}  

export default AllUser;