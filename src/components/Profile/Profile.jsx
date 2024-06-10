import logotype from "./usa-new_york-nyc-city-gorod-5663.jpg";
import class_profile from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
  return (
    <div className={class_profile.image_length}>
      <img src={logotype}></img>
      Contents
      <div className="ava description">ava+descriptions</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
