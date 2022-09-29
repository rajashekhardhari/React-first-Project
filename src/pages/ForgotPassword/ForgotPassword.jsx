import React, { Component } from 'react'
import {Box, Button, TextField, Typography} from '@mui/material'
class ForgotPassword extends Component{
  constructor(){
     super()
  }
  render(){
  return (
    <div>
      <form>
        <Box  display="flex" 
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
                      }}}>
         <Typography variant="h5" padding={3} textAlign="center">Forgot Password</Typography>
         <TextField margin="normal" type={"email"} varient="outlined" placeholder="EmailID"/>
         <TextField margin="normal" type={"number"} varient="outlined" placeholder="PhoneNumber"/>
         <Button sx={{margin:3,borderRadius:3}}variant="contained" color="warning">Submit</Button>
        </Box>
      </form>
    </div>
  )
}
}
export default ForgotPassword;
