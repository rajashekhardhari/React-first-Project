import React, { Component } from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
import { Link } from "react-router-dom";
import { blue } from '@mui/material/colors';

class Login extends Component{
  constructor(){
     super()
  }
  render(){
    return(
      <div>
        <Typography variant="h4" textAlign="center" color="red" borderColor={"blue"} backGroundColor="blue">Fundoo Note</Typography>
      <form>
        <Box display="flex" 
            flexDirection={"column"}
            maxWidth={400} 
            alignItems="center" 
            justifyContent={'Center'}
                  margin="auto"
                  marginTop={5}
                      padding={3}
                      borderRadius={5}
                      boxShodow={"5px 5px 10px #ccc"}
                      sx={{":hover":{
                        boxShadow:"10px 10px 20px #ccc",
                      }}}
                      >

           
          <Typography variant="h5" padding={1} textAlign="center">Login</Typography>
           <TextField margin="normal" type={"email"} varient="outlined" placeholder="EmailID"/>
           <TextField margin="normal" type={"password"}varient="outlined" placeholder="password" />
           <Button sx={{margin:2,borderRadius:3}}variant="contained" color="warning">Login</Button>
           <Link to="/registration" textAlign="Right"> 
                 Go to Registration
                 </Link>
                 

           <Link to="/forgotpassword" textAlign="left" > 
                 Forgot Password
                 </Link>
        </Box>
      </form>
    </div>
  )
}
}

export default Login;