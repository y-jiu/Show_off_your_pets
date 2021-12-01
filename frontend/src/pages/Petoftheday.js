import MenuBar from "../components/MenuBar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

const Petoftheday = () => {
  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div>
        <Card style = {{width: "50%", height: "570px", margin: "auto", marginTop: "50px", backgroundColor:"#2F323B", display: 'flex'}}>
          <CardMedia
            component="img"
            sx={{ width: "45%", height: "45%", marginTop: "auto", marginBottom: "auto", marginLeft: "20px", marginRight: "20px" }}
            image="https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg"
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: "100%"}}>
            <CardContent sx={{ flex: '1 0 auto', color: "white", textAlign: "left" , borderBottom: "2px solid grey"}}>
              <div style = {{fontSize: "20px", marginBottom: "20px",marginTop: "20px"}}>User 1</div>
              <div style = {{fontSize: "15px"}}>내용내용내용</div>
           </CardContent>
           <CardContent sx={{ flex: '1 0 auto', color: "white" }}>
             <div style ={{display:"flex"}}>
              <p style = {{fontSize: "15px", fontWeight: "bold", marginRight: "20px"}}>User 2 </p>
              <p style = {{fontSize: "15px"}}> 댓글댓글댓글 </p>
            </div>
            <div style ={{display:"flex"}}>
              <p style = {{fontSize: "15px", fontWeight: "bold", marginRight: "20px"}}>User 2 </p>
              <p style = {{fontSize: "15px"}}> 댓글댓글댓글 </p>
            </div>
          </CardContent>
          <div style={{ display: "flex" }}>
            <TextField
              id="outlined-textarea"
              label="Comments"
              variant="filled"
              InputLabelProps={{
                style: { color: '#fff'}, 
            }}
            InputProps={{
              style: { color: '#fff'}
            }}
            style={{ width: "85%"}}
              multiline
            />
            <IconButton aria-label="add comments" component="span" style={{ width: "15%", color: "white"}}>
              <SendIcon /> 
            </IconButton>
          </div>
        </Box>
      </Card>
      </div>
    </div>
  );
}
export default Petoftheday;