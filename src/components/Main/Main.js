import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export default function Main() {
  const navigate = useNavigate();

  const LookBookButton = () => {
    navigate("/lookbook");
  };

  const ClosetButton = () => {
    navigate("/closet");
  };

  return (
    <div className="button_container">
      <p class="description">Welcome to Seelook!</p>
    <div className="main">
      <div className="left-section">
        <button className="btn-closet" onClick={ClosetButton}>
          <span>Closet</span>
        </button>
      </div>
      <div className="right-section">
        <button className="btn-lookbook" onClick={LookBookButton}>
          <span>Lookbook</span>
        </button>
      </div>
    </div>
    </div>
  );
}
