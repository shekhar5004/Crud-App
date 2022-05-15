import { FormControl,FormGroup,Input,InputLabel,button,makeStyles, Button, Typography } from "@material-ui/core"
import react,{ useState,useEffect } from "react"
import {editUser,getUsers } from "../Service/api"
import {useHistory,useParams} from "react-router-dom";

const useStyle=makeStyles({
    container :{
        width : '50%',
        margin : '5% 0 0 25%',
        '&>*' :{
           marginTop: 20 
        } 
    }
})

const initialValues = {
    name : "",
    username: "",
    email: "",
    phone: ""
}
const EditUsers = () =>{
    const [user,setUser]=useState(initialValues); 
    const {name,username,email,phone}=user;
    const classes=useStyle();
    const history=useHistory();
    const {id}=useParams();

    useEffect(() =>{
        loadUserData();
    },[]);

    const loadUserData = async () =>{
       const response=await  getUsers(id);
       setUser(response.data);
    }
    const onValueChange = (e) =>
    {
      setUser({...user,[e.target.name] : e.target.value})
    }

    const editUserDetails = async () =>{
        await editUser(id,user);
        history.push('/all');
    } 
    return (
       <FormGroup className={classes.container}>
         <Typography variant="h4">Edit User</Typography>
          <FormControl> 
          <InputLabel>name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='name'/>
          </FormControl> 
          <FormControl>
          <InputLabel>UserName</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='username'/>
          </FormControl> 
          <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='email'/>
          </FormControl> 
          <FormControl> 
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='phone'/>
          </FormControl> 
          <Button variant="contained" onClick={() => editUserDetails()}>Edit User</Button> 
         
            
      </FormGroup>
    )
}

export default EditUsers;