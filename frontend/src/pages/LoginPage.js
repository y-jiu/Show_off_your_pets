import React, { Component, useEffect } from 'react';
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
  backgroundColor:"whitesmoke",
  width: "500px",
  height: "500px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "50px",
  paddingTop: "70px"
}

const LoginPage = () => {
    
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  

    const [username,setUsername] =  React.useState('')
    const [id,setId] =  React.useState('')
    const [password,setPassword] =  React.useState('')

    const handleUsername = (e) =>{
      setUsername(e.target.value)
    }
    const handleId = (e) =>{
      setId(e.target.value)
    }
    const handlePassword = (e) =>{
      setPassword(e.target.value)
    }
    let [loginauth, setLogin] = React.useState([]);

    let getLogin = async () =>{ //fetch user api for loginCheck()
      let res = await fetch('/api/v1/users/')
      let data = await res.json()
      setLogin(data)
      
    }
    useEffect(() => {
      getLogin()
    }, [])

    function loginCheck(e) { // Check for login
      e.preventDefault();
      for(let i = 0 ; i < loginauth.length ; i++){
        if (loginauth[i].user_id == id){
          if(loginauth[i].user_pw == password){
            sessionStorage.setItem("user_name", loginauth[i].user_name);
            sessionStorage.setItem("user_id", loginauth[i].id);
            window.location.href = `/gallery`
          }
        }
      }
    }
    const signedUp = () =>{ // When Sign Up button is clicked in Sign up modal
      let formData = new FormData();
      formData.append('user_name',username);
      formData.append('user_id',id);
      formData.append('user_pw',password);
      fetch('api/v1/users/', { 
        method: 'POST',
        body:formData
      }).then(
          response => response.json()
      ).then(
          success => console.log(success) 
      ).catch(
          error => console.log(error)
      );
      window.location.href = '/'
    }

    return (
      <div>
        <div 
          style={containerstyle}>
              <div>
                <Typography variant="h6" style={{color: "#2F323B"}}>Sign in to share how cute your pet is!</Typography>
              </div>
            <Stack spacing={2} ml= {20} mr= {20} > 
              
              <div> </div><div> </div><div> </div>
              <TextField id="standard-basic" onChange={handleId} label="ID" variant="standard" />
              <TextField id="standard-basic" onChange={handlePassword} label="PW" variant="standard" type="password"/>
              <div> </div><div> </div><div> </div>
              <Button onClick={loginCheck} style = {{backgroundColor: "#576CAB" }} variant="contained">SIGN IN</Button>
              <Button onClick={handleOpen} style = {{backgroundColor: "#576CAB" }} variant="contained">SIGN UP</Button>
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
                  <TextField name = "username" id="standard-basic" onChange={handleUsername} label="Username" variant="standard" />
                  <TextField name = "id" id="standard-basic" onChange={handleId} label="ID" variant="standard" />
                  <TextField name = "password" id="standard-basic" onChange={handlePassword} label="PW" variant="standard" type="password"/>
                  <div> </div><div> </div><div> </div>
                  <Button variant="contained" style = {{backgroundColor: "#576CAB" }} onClick={()=>{signedUp(); handleClose();}} >SIGN UP</Button>
                </Stack>
              </Box>
            </Modal>
        </div>
      </div>
    );
}

export default LoginPage;