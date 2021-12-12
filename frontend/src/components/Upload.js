
import React, { Component } from 'react';
import ImageUploader from "react-images-upload";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  backgroundColor:"#2F323B",
  boxShadow: 24,
  p: 4,
};

const Upload = props => {
  const {isOpen, close} = props
  const [pictures, setPictures] = React.useState([]);
  const [text, setText] = React.useState('');
  const onDrop = async (picture) => {
    setPictures([...pictures, picture]);
  };
  
  const onInput = (e) =>{ // Event function in textfield input
    setText(e.target.value);
  }

  const save = async () => { // Send post to server
    let formData = new FormData();
    formData.append('contents',text);
    formData.append('photo', pictures[0][0]);
    formData.append('user_name',sessionStorage.getItem('user_name'))
    fetch('api/v1/posts/', { 
        method: 'POST',
        body: formData
    }).then(
        response => response.json()
    ).then(
        success => console.log(success) 
    ).catch(
        error => console.log(error) 
    );
    window.location.href = `/gallery`
  }

  return(
    <div>
      <Modal
            open={props.open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={modalstyle}>
        <ImageUploader
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
      <div>
        <TextField
            id="outlined-textarea"
            value={text}
            onChange={onInput}
            label="Text"
            variant="filled"
            InputLabelProps={{
              style: { color: '#fff'}, 
          }}
          InputProps={{
            style: { color: '#fff'}
          }}
          style={{ width: "100%"}}
            multiline
          />
        </div>
        <div style = {{marginTop: "50px"}}>
          <Button variant="contained" onClick ={()=>{save()}} style = {{backgroundColor: "#576CAB", float: "right"}}>Save</Button>
        </div>
        </Box>
        </Modal>
      </div>
      
  )
}

export default Upload;