import React, { useEffect, useState } from 'react';
import MenuBar from "../components/MenuBar";
import Box from '@mui/material/Box';
import Posts from '../components/Posts';
import Button from '@mui/material/Button';
import Upload from '../components/Upload';

const Gallery = () => {
  const [openpost, setOpenPost] = React.useState(false);
  const [idx, setIdx] = React.useState(0);
  const handleOpenPost = (idx) => {setOpenPost(true); setIdx(idx)};
  const handleClosePost = () => setOpenPost(false);  

  const [openupload, setOpenUpload] = React.useState(false);
  const handleOpenUpload = () => setOpenUpload(true);
  const handleCloseUpload = () => setOpenUpload(false);

  let [posts, setPosts] = useState([]);

  useEffect(() => { 
    getPosts()
  }, [])

  let getPosts = async () =>{ //fetch posts api
    let res = await fetch('/api/v1/posts/')
    let data = await res.json()
    setPosts(data)
  }

  const renderPost = () => { // Render posts' thumbnail in grid
    const result = [];
    for (let i = 0; i < posts.length; i++) {
      result.push(
      <Box gridColumn="span 3" onClick = {()=> handleOpenPost(i)}>
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
        <Button variant="contained" style = {{backgroundColor: "#576CAB", marginLeft: "120px"}} onClick={handleOpenUpload}>New Image</Button>
        <Upload open={openupload} close={handleCloseUpload}></Upload>
      </div>
      <div style = {{width: "50%", margin: "auto", marginTop: "50px"}}>   
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          {renderPost()}
        </Box>
        <Posts postidx = {idx} open={openpost} close={handleClosePost}/>
      </div>
    </div>
  );
}
export default Gallery;