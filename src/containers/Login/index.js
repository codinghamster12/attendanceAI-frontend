import React from "react";
import { Container, Box, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import './index.css'


const useStyles = makeStyles((theme) => ({
    
    subheading:{
        fontWeight: 500,
        fontSize: 18,
        marginTop: 50,
        fontFamily: 'Montserrat, sans-serif'
    },
    button:{
        textAlign: 'center'
    },
   text:{
     marginBottom: 50,
     fontFamily: 'Montserrat, sans-serif'

   }


}))



const Login = () => {
    const classes= useStyles();
  return (
    <Container maxWidth="xs" style={{marginTop:100}}>
      <Box
        p="24px"
        mt="50px"
        bgcolor="black"
        boxShadow="10"
        borderRadius="15px"
      >

        
        
        <Typography align="center" variant="body1" color="secondary" className={classes.subheading}>
          Sign in to your account
        </Typography>
        <br/>
        <Typography variant="caption" color="secondary">
          Email
        </Typography>
        <br/>

        <TextField
          id="outlined-size-small"
          
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          inputProps={{style:{ background: '#fff' }}}
          

        />
        <Typography variant="caption" color="secondary">
          Password
        </Typography>
        <TextField

          id="outlined-size-small"
          
          variant="outlined"
          size="small"
          fullWidth
          margin="normal"
          inputProps={{style:{ background: '#fff' }}}
        />
        <br/>
        <br/>
        <Button variant="contained" color="primary" fullWidth disableElevation size="large" className={classes.button}>
          Login
        </Button>
        <br/>
        <br/>
        <br/>
        
        <Typography variant="body2" color="secondary" align="center" className={classes.text}>
          Don't have an account? <span style={{color: '#fff'}}><a href="/#/signup" style={{textDecoration: 'none', color: '#116535'}}>Signup</a></span>
        </Typography>


      </Box>
    </Container>
  );
};

export default Login;
