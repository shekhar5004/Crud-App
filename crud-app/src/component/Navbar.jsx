import react from 'react';
import {AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle=makeStyles({
     heading: {
      background: '#111111'
     },
     tabs :{
         color: '#ffffff',
         textDecoration :'none',
         marginRight: 20
     }
});
const Navbar = () =>{

    const classes=useStyle();

    return (
        <AppBar className={classes.heading} position="statics">
            <Toolbar>
             <NavLink className={classes.tabs} to="/" exact>Code for life</NavLink>
             <NavLink className={classes.tabs} to="all" exact>All User</NavLink>
             <NavLink className={classes.tabs} to="add" exact>Add User</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
