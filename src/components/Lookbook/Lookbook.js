import React, { useState } from "react";
import Stylist from "../Stylist/Stylist.js";
import { useNavigate } from "react-router-dom";
import "../Main/Main.css";

const Lookbook = () => {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/StyleUpload");
  };

  const LookBookButton = () => {
    navigate("/stylist");
  };

  return (
    <div className="main">
      <div className="main-btn-bundle">
        <div className="upload">
          <button className="upload-btn" onClick={UploadButton}>
            업로드
          </button>
        </div>
        <div className="lookbook">
          <button className="lookbook-btn" onClick={LookBookButton}>
            나의 룩북
          </button>
        </div>
      </div>
    </div>
  );
};
export default Lookbook;
