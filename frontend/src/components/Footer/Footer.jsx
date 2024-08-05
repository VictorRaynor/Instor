import "./Footer.css";
import youtubeicon from "../../assets/yticon.svg";
import pinteresticon from "../../assets/pinteresticon.svg";
import instagramicon from "../../assets/instagramicon.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-media-icons">
          <img src={pinteresticon} alt="pinterest" />
          <img src={instagramicon} alt="instagram" />
          <img src={youtubeicon} alt="youtube" />
        </div>
        <h3>Instor 2023</h3>
      </footer>
    </>
  );
};

export default Footer;
