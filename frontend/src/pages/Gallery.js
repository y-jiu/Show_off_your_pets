import MenuBar from "../components/MenuBar";
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

const Gallery = () => {
  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div style = {{width: "50%", margin: "auto", marginTop: "50px"}}>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 3">
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

        {/* Pagination이랑 글쓰기 button (누르면 Modal) 추가 / img 클릭하면 댓글이랑 공감 표시 modal 추가 */}
      </div>
    </div>
  );
}
export default Gallery;