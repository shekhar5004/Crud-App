import download from '../Asset/Images/download.png';
import doit from '../Asset/Images/doit.jpeg';
import {Box,makeStyles, Typography} from '@material-ui/core';
import { mergeClasses } from '@material-ui/styles';

const useStyle=makeStyles({
    image1 :{
        height : '5%',
        width: '35%'
    },
    container: {
        margin: 50
    }
})
const CodeforInterview = () => {
    const classes=useStyle();
    return(
      <Box className={classes.container}>  
      <Typography variant="h4" styles={{marginBottom: 50}}>Code for Life</Typography>
      <Box style={{display: 'flex'}}>  
      <img  src={download}/>
      <img className={classes.image1} src={doit}/>
      </Box>
      </Box>
    )
}

export default CodeforInterview;