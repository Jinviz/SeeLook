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
    <div className="main">
      <div className="main-btn-bundle">
        <div className="upload">
          <button className="upload-btn" onClick={ClosetButton}>
            옷장
          </button>
        </div>
        <div className="lookbook">
          <button className="lookbook-btn" onClick={LookBookButton}>
            룩북
          </button>
        </div>
      </div>
    </div>
  );
}
