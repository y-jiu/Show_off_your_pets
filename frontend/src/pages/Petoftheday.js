import MenuBar from "../components/MenuBar";
import Posts from "../components/Posts";

const Petoftheday = () => {
  return (
    <div>
      <MenuBar>
      </MenuBar>
      <div style= {{width: "50%" , margin: "auto", marginTop: "50px"}}>
       <Posts></Posts>
      </div>
    </div>
  );
}
export default Petoftheday;