import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from "../components/MenuBar";
import Box from '@mui/material/Box';
import Posts from '../components/Posts';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Upload from '../components/Upload';

const GalleryPost = () => {
  const { idx } = useParams()
  console.log(idx)
  return (
    <div>
      <MenuBar>
      </MenuBar>
      {/* <div style = {{width: "50%", marginTop: "50px"}}>
        <Button variant="contained" style = {{backgroundColor: "grey", marginLeft: "120px"}} onClick={handleOpenUpload}>New Image</Button>
        <Upload open={openupload} close={handleCloseUpload}></Upload>
      </div> */}
      <Posts idx={idx}></Posts>
      
    </div>
  )

}
export default GalleryPost;