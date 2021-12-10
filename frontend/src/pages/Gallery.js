import React, { Component, useEffect, useState } from 'react';
import MenuBar from "../components/MenuBar";
import Box from '@mui/material/Box';
import Posts from '../components/Posts';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Upload from '../components/Upload';

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

const Gallery = () => {
  const [openpost, setOpenPost] = React.useState(false);
  const handleOpenPost = () => setOpenPost(true);
  const handleClosePost = () => setOpenPost(false);  

  const [openupload, setOpenUpload] = React.useState(false);
  const handleOpenUpload = () => setOpenUpload(true);
  const handleCloseUpload = () => setOpenUpload(false);

  let [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
  }, [])

  let getPosts = async () =>{
    let res = await fetch('/api/v1/posts/')
    let data = await res.json()
    console.log(data)
    setPosts(data)
  }

  const renderPost = () => {
    const result = [];
    for (let i = 0; i < posts.length; i++) {
      result.push(
      <Box gridColumn="span 3" onClick = {handleOpenPost}>
        <img src = {posts[i].photo} width="100%" height="100%"></img>
      </Box>
    );
    }
    return result;
  };

  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div style = {{width: "50%", marginTop: "50px"}}>
        <Button variant="contained" style = {{backgroundColor: "grey", marginLeft: "120px"}} onClick={handleOpenUpload}>New Image</Button>
        <Upload open={openupload} close={handleCloseUpload}></Upload>
      </div>
      <div style = {{width: "50%", margin: "auto", marginTop: "50px"}}>   
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          {renderPost()}
        </Box>
        <Modal
          open={openpost}
          onClose={handleClosePost}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalstyle}>
            <Posts/>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
export default Gallery;