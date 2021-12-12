import * as React from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';

const textStyle = {
  fontSize: "18px",
  color: "white",
  marginLeft: "30px",
  marginRight: "150px"
}
const selectedTextStyle = {
  fontSize: "18px",
  color: "#576CAB",
  marginLeft: "30px",
  marginRight: "150px"
}

const MenuBar = () => {
  const [flag, setFlag] = React.useState(false);

  React.useEffect(() => {
    getFlag()
  }, [])
  
  const getFlag = () => { // When the current page is petoftheday,
    if(window.location.href =='http://localhost:3000/petoftheday'){
      setFlag(true) //set flag true to change button text color
    }
  }
  
  function goGallery(e) {
    setFlag(false)
    e.preventDefault();
    window.location.href = '/gallery' //When Gallery button is clicked in menubar, route to the page
  }

  function goPetofttheday(e) {
    setFlag(true)
    e.preventDefault();
    window.location.href = '/petoftheday' //When Pet of the day button is clicked in menubar, route to the page
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
      <Button variant="text" style={flag ? textStyle : selectedTextStyle} onClick={goGallery}>Gallery</Button>
      <Button variant="text" style={flag ? selectedTextStyle : textStyle} onClick={goPetofttheday}>Pet of the Day</Button>
      <Button variant="contained" style = {{backgroundColor: "grey", marginLeft: "120px"}} onClick = {signOut}>Sign out</Button>
      </Box>
    </div>
  );
}
export default MenuBar;