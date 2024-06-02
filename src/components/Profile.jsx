import "./../App.css"
import logotype from "./../usa-new_york-nyc-city-gorod-5663.jpg";
import class_profile from "./Profile.module.css"

const Profile = () =>{
    return (
      <div className={class_profile.content}>
        <div className={class_profile.image_length}>
          <img src={logotype}></img>
          Contents
          <div className="ava description">ava+descriptions</div>
          <div className="my_posts">My posts</div>
          <div className="new_post">New post</div>
          <div className={class_profile.post}>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    );

};

export default Profile;
