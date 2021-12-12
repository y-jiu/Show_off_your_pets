import MenuBar from "../components/MenuBar";
import Posts from "../components/Posts";
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
import React, { Component, useEffect, useState } from 'react';


const Petoftheday = () => {
  let [posts, setPosts] = useState([]);
let [idx, setIdx] = useState(0);
let [comments, setComments] = useState([]);
let [newcomment, setNewcomment] = useState('');
const [like, setLike] = React.useState(false);

  const handleLike = () => { 
    let likeusers = posts[idx]?.likes
    if(like == true){
      setLike(false);
      for(let i = 0 ; i < posts[idx]?.likes.length ; i++ ){
        if(posts[idx]?.likes[i] == parseInt(sessionStorage.getItem('user_id'))){
          likeusers.splice(i,1);
        }
      }
      const update = {
        id:posts[idx]?.id,
        contents:posts[idx]?.contents,
        user_name:posts[idx]?.user_name,
        likes : likeusers
      }
      let url = 'api/v1/posts/'+posts[idx]?.id+'/'
      axios.patch(url, update)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        if (error.response){
          console.log(error.response)
          }else if(error.request){
            console.log(error.request)
          }else if(error.message){
            console.log(error.message)
          }
      })
    }else{
      setLike(true);
      likeusers.push(parseInt(sessionStorage.getItem('user_id')))
      const update = {
        id:posts[idx]?.id,
        contents:posts[idx]?.contents,
        user_name:posts[idx]?.user_name,
        likes : likeusers
      }
      let url = 'api/v1/posts/'+posts[idx]?.id+'/'
      axios.patch(url, update)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        if (error.response){
          console.log(error.response)
          }else if(error.request){
            console.log(error.request)
          }else if(error.message){
            console.log(error.message)
          }
      })
  }
  
 };

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
  let temp = 0;
  for(let i = 0 ; i < data.length ; i++){
    if(data[i].likes.length > temp){
      setIdx(i)
    }
  }
  for (let i = 0 ; i < data[idx].likes.length ; i++){
    if(data[idx].likes[i] == parseInt(sessionStorage.getItem('user_id'))){
      setLike(true);
      break;
    }
  }
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
  let formData = new FormData();
  formData.append('comment',newcomment);
  formData.append('user_name',sessionStorage.getItem('user_name'))
  formData.append('post_id', posts[idx]?.id);

  fetch('api/v1/comments/', {
      method: 'POST',
      body: formData
  }).then(
      response => response.json() 
  ).then(
      success => console.log(success) 
  ).catch(
      error => console.log(error)
  );
  window.location.reload()
}
  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div style= {{width: "50%" , margin: "auto", marginTop: "50px"}}>
      <Card style = {{ height: "570px", backgroundColor:"#2F323B", display: 'flex'}}>
          <CardMedia
            component="img"
            sx={{ width: "45%", height: "45%", marginTop: "auto", marginBottom: "auto", marginLeft: "20px", marginRight: "20px" }}
            image={posts[idx]?.photo}
          />
          
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
                ? <FavoriteIcon />
                : <FavoriteBorderIcon /> 
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
      </div>
    </div>
  );
}
export default Petoftheday;