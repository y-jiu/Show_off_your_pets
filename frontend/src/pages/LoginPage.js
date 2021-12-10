import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const containerstyle = {
  backgroundColor:"#DFEAF7",
  width: "500px",
  height: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px",
  paddingTop: "70px",
  borderRadius: "30px"
}

const LoginPage = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  

    // const [signup, setSignup] = React.useState({username: '', id:'', password: ''});
    const [username,setUsername] =  React.useState('')
    const [id,setId] =  React.useState('')
    const [password,setPassword] =  React.useState('')
    const onSignup_username = (e) =>{
      setUsername(e.target.value)
    }
    const onSignup_id = (e) =>{
      setId(e.target.value)
    }
    const onSignup_password = (e) =>{
      setPassword(e.target.value)
    }

    function loginCheck(e) {
      e.preventDefault();
      console.log('You clicked signin.');
      // login 구현
      window.location.href = '/gallery'
    }
    const signedUp = () =>{
      let formData = new FormData();
      formData.append('user_name',username);
      formData.append('user_id',id);
      formData.append('user_pw',password);
      fetch('api/v1/users/', { // Your POST endpoint
        method: 'POST',
        body:formData
      }).then(
          response => response.json() // if the response is a JSON object
      ).then(
          //TODO:save also in customer object
          success => console.log(success) 
          // Handle the success response object
      ).catch(
          error => console.log(error) // Handle the error response object
      );
    }

    return (
      <div>
        <div 
          style={containerstyle}>
            <div>
                <Typography variant="h6" style={{color: "dimgrey"}}>Sign in to share how cute your pet is!</Typography>
              </div>
            <Stack spacing={2} ml= {20} mr= {20} > 
              
              <div> </div><div> </div><div> </div>
              <TextField id="standard-basic" label="ID" variant="standard" />
              <TextField id="standard-basic" label="PW" variant="standard" type="password"/>
              <div> </div><div> </div><div> </div>
              <Button onClick={loginCheck} variant="contained">SIGN IN</Button>
              <Button onClick={handleOpen} variant="contained">SIGN UP</Button>
            </Stack>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={modalstyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  SIGN UP
                </Typography>
                <Stack id="modal-modal-description" spacing={2} ml= {10} mr= {10} > 
                  <TextField name = "username" id="standard-basic" onChange={onSignup_username} label="Username" variant="standard" />
                  <TextField name = "id" id="standard-basic" onChange={onSignup_id} label="ID" variant="standard" />
                  <TextField name = "password" id="standard-basic" onChange={onSignup_password} label="PW" variant="standard" type="password"/>
                  <div> </div><div> </div><div> </div>
                  <Button variant="contained" onClick={()=>{signedUp();handleClose();}} >SIGN UP</Button>
                </Stack>
              </Box>
            </Modal>
        </div>
      </div>
    );
}

export default LoginPage;