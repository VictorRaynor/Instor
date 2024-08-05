import "./TabBtn.css";

const TabBtn = () => {
  return (
    <>
      <div className="tab-btn-container">
        <button className="tab-btn">
          <p>Beschreibung</p>
        </button>
        <button className="tab-btn">
          <p>Abmessungen</p>
        </button>
        <button className="tab-btn">
          <p>Pflege</p>
        </button>
      </div>
    </>
  );
};

export default TabBtn;
