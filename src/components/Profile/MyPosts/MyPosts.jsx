import "./../../../App.css"

import class_profile from "./MyPosts.module.css"

const MyPosts = () =>{
    return (
      <div className="my_posts">
        <div className="new_post">
          <div className={class_profile.post}>
            <div>post 1</div>
            <div>post 2</div>
          </div>
          New post
        </div>
        My posts
      </div>
    );

};

export default MyPosts;
