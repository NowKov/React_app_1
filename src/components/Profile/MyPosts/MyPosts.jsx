import class_myposts from "./MyPosts.module.css";
import Post from "./Posts/Post.jsx";
import avat_1 from "./Posts/img/13a7c17df13b48a6c630b3474e749764.png";
import avat_2 from "./Posts/img/127234-pikselyami-3.png";
import avat_3 from "./Posts/img/1637596383_1-flomaster-club-p-risunki-po-kletochkam-robot-krasivie-risun-1.png";
import avat_4 from "./Posts/img/1644893081_1-kartinkin-net-p-pikselnie-kartinki-1.png";
import avat_5 from "./Posts/img/1648078890_3-kartinkin-net-p-kartinki-po-kletochkam-kotiki-3.png";
import avat_6 from "./Posts/img/dd182c8008f9433d3a8d102757a6e854.png";
import avat_7 from "./Posts/img/fe5bea201cd971882c4e6ecc3f2b155d.png";

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
      <div className={class_myposts.my_posts}>
        <div className={class_myposts.new_post}>
          <div className={class_myposts.post}>
            <Post img_avat={avat_5} message="Post 1" like_post="6" />
            <Post img_avat={avat_2} message="It's OK" like_post="7" />
            <Post img_avat={avat_3} message="It's working" like_post="6" />
            <Post
              img_avat={avat_4}
              message="My name pet is Filya"
              like_post="7"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
