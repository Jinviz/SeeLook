import React, { useState } from "react";
import Clothes from "../Clothes/Clothes.js";
import { useNavigate } from "react-router-dom";
import "../Main/Main.css";

const Closet = () => {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/ClothesUpload");
  };

  const ClosetButton = () => {
    navigate("/clothes");
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
          <button className="lookbook-btn" onClick={ClosetButton}>
            나의 옷장
          </button>
        </div>
      </div>
    </div>
  );
};

export default Closet;
