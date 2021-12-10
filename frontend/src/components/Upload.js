
import React, { Component } from 'react';
import ImageUploader from "react-images-upload";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { resolvePath } from 'react-router';

const Upload = props => {

  const [pictures, setPictures] = React.useState([]);
  const [text, setText] = React.useState('');
  const onDrop = async (picture) => {
    setPictures([...pictures, picture]);
  };


  const onInput = (e) =>{
    setText(e.target.value);
  }

  const save = async () => {
    let formData = new FormData();
    formData.append('contents',text);
    formData.append('photo', pictures[0][0]);

    fetch('api/v1/posts/', { // Your POST endpoint
        method: 'POST',
        body: formData
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        //TODO:save also in customer object
        success => console.log(success) // Handle the success response object
    ).catch(
        error => console.log(error) // Handle the error response object
    );
    
  }

  return(
    <div>
      <div>
        <ImageUploader
            {...props}
            withIcon={true}
            buttonText="Choose images"
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
          />
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
          <Button variant="contained" onClick ={save} style = {{backgroundColor: "grey", float: "right"}}>Save</Button>
        </div>
      </div>
  )
}

export default Upload;