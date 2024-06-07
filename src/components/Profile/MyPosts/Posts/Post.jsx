import class_post from "./Post.module.css";
import avat from "./1497458933_lyaga.png";

let way =
  "C:/New_folder/React/Projects/1_First_project/react_first/src/App.css";
const Post = (props) => {
  return (
    <div className={class_post.post}>
      <img src={avat}></img>
      {props.message}
      <button>Like</button>
    </div>
  );
};

export default Post;
