import React, { Component, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Modal from '@mui/material/Modal';

const Posts = props => {
  const idx = props.postidx

  const [like, setLike] = React.useState(true);
  
  const handleLike = () => { like ? setLike(false) : setLike(true) };

  const isOpen = props.open
  const close = props.close

  const handleDelete = (idx) =>{
      let url = 'api/v1/posts/'+posts[idx]?.id+'/'
      console.log(url)
      axios.delete(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    window.location.href = `/gallery`
  }

  let [posts, setPosts] = useState([]);
  let [comments, setComments] = useState([]);
  let [newcomment, setNewcomment] = useState('');
  const onInput = (e) =>{
    setNewcomment(e.target.value);
  }
  useEffect(() => {
    getPosts()
    getComments()
  }, [])

  let getPosts = async () =>{
    let res = await fetch('/api/v1/posts/')
    let data = await res.json()
    
    setPosts(data)
  }

  let getComments = async () =>{
    let res = await fetch('/api/v1/comments/')
    let data = await res.json()
    setComments(data)
  }

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
  
  const renderComments = () => {
    const result = [];
    for (let i = 0; i < comments.length; i++) {
      if(comments[i]?.post_id == posts[idx]?.id){
        result.push(
          <div style ={{display:"flex"}}>
            <p style = {{fontSize: "15px", fontWeight: "bold", marginRight: "20px"}}> {comments[i].user_name} </p>
            <p style = {{fontSize: "15px"}}> {comments[i].comment} </p>
          </div>
      );
      }
    }
    return result;
  };
  const save = async () => {
    console.log(newcomment)
    console.log(sessionStorage.getItem('user_name'))
    console.log(posts[idx]?.id)
    let formData = new FormData();
    formData.append('comment',newcomment);
    formData.append('user_name',sessionStorage.getItem('user_name'))
    formData.append('post_id', posts[idx]?.id);

    fetch('api/v1/comments/', { // Your POST endpoint
        method: 'POST',
        body: formData
    }).then(
        response => response.json() // if the response is a JSON object
    ).then(
        //TODO:save also in customer object
        success => console.log(success) 
        // Handle the success response object
    ).catch(
        error => console.log(error) // Handle the error response object
    );
    window.location.reload()
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
        <Card style = {{ height: "570px", backgroundColor:"#2F323B", display: 'flex'}}>
          <CardMedia
            component="img"
            sx={{ width: "45%", height: "45%", marginTop: "auto", marginBottom: "auto", marginLeft: "20px", marginRight: "20px" }}
            image={posts[idx]?.photo}
          />
          {sessionStorage.getItem('user_name')==posts[idx]?.user_name ? <DeleteIcon sx={{color: "white"}} onClick={()=>{handleDelete(idx); close();}}/>: ''}
          
          <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
            <CardContent sx={{ flex: '1 0 auto', color: "white", textAlign: "left" , borderBottom: "2px solid grey"}}>
              <div style = {{fontSize: "20px", marginBottom: "20px",marginTop: "20px"}}>{posts[idx]?.user_name}</div>
              <div style = {{fontSize: "15px"}}>{posts[idx]?.contents}</div>
          </CardContent>
          <CardContent sx={{ flex: '1 0 auto', color: "white" }}>
            {renderComments()}
          </CardContent>
          <div style={{ display: "flex" }}>
            <IconButton aria-label="like" component="span" onClick={handleLike} style={{ width: "10%", color: "white"}}>
              { like
                ? <FavoriteBorderIcon /> 
                : <FavoriteIcon />
              }
            </IconButton>
            <TextField
              id="outlined-textarea"
              label="Comments"
              value={newcomment}
              onChange={onInput}
              variant="filled"
              InputLabelProps={{
                style: { color: '#fff'}, 
            }}
            InputProps={{
              style: { color: '#fff'}
            }}
            style={{ width: "80%"}}
              multiline
            />
            <IconButton aria-label="add comments" component="span" style={{ width: "10%", color: "white"}}>
              <SendIcon onClick={save} /> 
            </IconButton>
          </div>
        </Box>
      </Card>
    </Box>
    </Modal>
  </div>
  
  );
}

export default Posts;