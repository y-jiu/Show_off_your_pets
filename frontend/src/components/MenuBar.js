import * as React from 'react';
import { Box, ThemeProvider, createTheme, margin } from '@mui/system';
import Button from '@mui/material/Button';

const textStyle = {
  fontSize: "18px",
  // color: "white",
  marginLeft: "30px",
  marginRight: "30px"
}
const selectedTextStyle = {
  fontSize: "18px",
  color: "white",
  marginLeft: "30px",
  marginRight: "30px"
}

//눌렀을때 폰트 색상 바뀌는거 추가
const MenuBar = () => {
  // const [flag, setFlag] = React.useState(false);
  
  function goGallery(e) {
    e.preventDefault();
    // setFlag(false)
    
    window.location.href = '/gallery'
  }

  function goPetofttheday(e) {
    e.preventDefault();
    // setFlag(true);
    window.location.href = '/petoftheday'

  }
  function signOut(e) {
    e.preventDefault();
    window.location.href = '/'
  }

  return (
    <div style={{ width: "70%", margin: "auto"}}>
      <Box sx={{ 
        height: "70px",
        paddingTop: "30px",
        borderBottom: "3px solid white",
        flexDirection: 'row' }}>
      <Button variant="text" style={selectedTextStyle} onClick={goGallery}>Gallery</Button>
      <Button variant="text" style={selectedTextStyle} onClick={goPetofttheday}>Pet of the Day</Button>
      <Button variant="contained" style = {{backgroundColor: "grey", marginLeft: "120px"}} onClick = {signOut}>Sign out</Button>
      </Box>
    </div>
  );
}
export default MenuBar;