import class_post from "./Post.module.css";
var j = 0;
var like_Post = 0;
function iLP() {
  return like_Post;
}

const Post = (props) => {
  return (
    <div className={class_post.post}>
      <div className={class_post.post_img}>
        <img src={props.img_avat}></img>
      </div>
      <div>
        {" "}
        {props.message}
        <button onClick={iLP}>Like</button>
        <a>{props.like_post}</a>
      </div>
    </div>
  );
};

export default Post;
