import * as React from 'react';
import { Box, ThemeProvider, createTheme, margin } from '@mui/system';
import Button from '@mui/material/Button';

const textStyle = {
  fontSize: "18px",
  color: "white",
  marginLeft: "30px",
  marginRight: "30px"
}

const MenuBar = () => {
  function goGallery(e) {
    e.preventDefault();
    window.location.href = '/gallery'
  }

  function goPetofttheday(e) {
    e.preventDefault();
    window.location.href = '/petoftheday'
  }
  function goFostering(e) {
    e.preventDefault();
    window.location.href = '/fostering'
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
      <Button variant="text" style={textStyle} onClick={goGallery}>Gallery</Button>
      <Button variant="text" style={textStyle} onClick={goPetofttheday}>Pet of the Day</Button>
      <Button variant="text" style={textStyle} onClick={goFostering}>Fostering/Adoption</Button>
      <Button variant="contained" style = {{backgroundColor: "grey", marginLeft: "120px"}} onClick = {signOut}>Sign out</Button>
      </Box>
    </div>
  );
}
export default MenuBar;