import { useEffect, useState } from "react";
import "./ProfileHeader.css";

const ProfileHeader = (props) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData(props.userData);
  }, [props]);
  return (
    <>
      <section className="header-container-user">
        <div
          className="user-img-container"
          style={{ backgroundImage: `url(${userData?.image?.url})` }}
        ></div>

        <div className="user-txt-container">
          <h1>{userData?.userhandle}</h1>
          <p>{userData?.description}</p>
          <p>Name: {userData?.name}</p>
          <p>Email: {userData?.email}</p>
        </div>
      </section>
    </>
  );
};

export default ProfileHeader;
