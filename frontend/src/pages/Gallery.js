import * as React from 'react';
import MenuBar from "../components/MenuBar";
import Box from '@mui/material/Box';
import Posts from '../components/Posts';
import Modal from '@mui/material/Modal';

const modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Gallery = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);  

  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div style = {{width: "50%", margin: "auto", marginTop: "50px"}}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3" onClick = {handleOpen}>
            <img src = "https://www.sciencetimes.co.kr/wp-content/uploads/2020/04/pets-3715733_1280.jpg" width="100%" height="100%"></img>
          </Box>
          <Box gridColumn="span 3" >
            <img src = "https://www.sciencetimes.co.kr/wp-content/uploads/2020/04/pets-3715733_1280.jpg" width="100%" height="100%"></img>
          </Box>
          <Box gridColumn="span 3">
            <img src = "https://www.sciencetimes.co.kr/wp-content/uploads/2020/04/pets-3715733_1280.jpg" width="100%" height="100%"></img>
          </Box>
          <Box gridColumn="span 3">
            <img src = "https://www.sciencetimes.co.kr/wp-content/uploads/2020/04/pets-3715733_1280.jpg" width="100%" height="100%"></img>
          </Box>
          <Box gridColumn="span 3">
            <img src = "https://www.sciencetimes.co.kr/wp-content/uploads/2020/04/pets-3715733_1280.jpg" width="100%" height="100%"></img>
          </Box>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalstyle}>
            <Posts />
          </Box>
        </Modal>
        {/* button (누르면 Modal) 추가 */}
      </div>
    </div>
  );
}
export default Gallery;