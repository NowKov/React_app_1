import class_profileInfo from "./ProfileInfo.module.css";
import logotype from "./usa-new_york-nyc-city-gorod-5663.jpg";
import logAva from "./1678964077_bogatyr-club-p-obezyana-shimpanze-foni-krasivo-75.jpg";

const ProfileInfo = () => {
  return (
    <div className={class_profileInfo.image_length}>
      <img className={class_profileInfo.imageLength} src={logotype}></img>
      <div className={`${class_profileInfo.avaDescription}`}>
        <div className={class_profileInfo.blockAva}>
          <div className={class_profileInfo.ava}>
            <img className={class_profileInfo.imgAva} src={logAva}></img>ava
          </div>
        </div>
        <div className={class_profileInfo.description}>description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
