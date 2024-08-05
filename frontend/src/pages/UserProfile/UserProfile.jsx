import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserProfile.css";
import MyFurnitureSlider from "../../components/MyFurnitureSlider/MyFurnitureSlider";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";

const UserProfile = () => {
  const params = useParams();

  const userHandle = params.userHandle;

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/user/${userHandle}`);
      setUserData(data);
    };
    fetchData();
  }, [userHandle]);
  return (
    <>
      <Header />
      <main>
        <ProfileHeader userData={userData} />

        <MyFurnitureSlider userData={userData} />
      </main>
    </>
  );
};

export default UserProfile;
