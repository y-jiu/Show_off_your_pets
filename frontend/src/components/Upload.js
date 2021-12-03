
import React, { Component } from 'react';
import ImageUploader from "react-images-upload";
import TextField from '@mui/material/TextField';

const Upload = () =>{

  const [pictures, setPictures] = React.useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  return(
    <div>
      <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
      <TextField
          id="outlined-textarea"
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
  )
}

export default Upload;