import "./ReviewBox.css";
import starfilled from "../../assets/starfilled.svg";
import starunfilled from "../../assets/starunfilled.svg";
import avatars from "../../assets/avatars.svg";

const ReviewBox = () => {
  return (
    <>
      <section className="reviewbox-container">
        <div className="star-and-reviews-container">
          <div className="star-container">
            <div className="star-svg">
              <img src={starfilled} alt="" />
              <img src={starfilled} alt="" />
              <img src={starfilled} alt="" />
              <img src={starfilled} alt="" />
              <img src={starunfilled} alt="" />
            </div>
            <div className="star-rating">
              <p>4,4</p>
            </div>
          </div>
          <p>12 Reviews</p>
        </div>
        <div className="customer-rating-icon-container">
          <img src={avatars} alt="" />
        </div>
      </section>
    </>
  );
};

export default ReviewBox;
