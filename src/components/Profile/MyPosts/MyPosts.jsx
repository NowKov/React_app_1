import class_myposts from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";

let way =
  "C:/New_folder/React/Projects/1_First_project/react_first/src/App.css";
const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className="my_posts">
        <div className="new_post">
          <div className={class_myposts.post}>
            <Post message="Post 1" />
            <Post message="It's OK" />
            <Post message="It's working" />
            <Post message="My name pet is Filya" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
