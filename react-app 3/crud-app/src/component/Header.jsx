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
const Header = () =>{

    const classes=useStyle();

    return (
        <AppBar className={classes.heading} position="statics">
            <Toolbar>
             <NavLink className={classes.tabs} to="/" exact>Code for Interview</NavLink>
             <NavLink className={classes.tabs} to="/all" exact>All User</NavLink>
             <NavLink className={classes.tabs} to="/add" exact>AddUser</NavLink>
             {/* <Typography className={classes.tabs}>Code for Interview</Typography>
             <Typography className={classes.tabs}>AllUser</Typography>
             <Typography className={classes.tabs}>AddUser</Typography> */}
            </Toolbar>
        </AppBar>
    )
}

export default Header;
