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
    <div className='button_container'>
       <p class="description">Show off your items by uploading them, or check out your Clozet.</p>
    <div className="main"> 
    <div className="left-section">
      <button className="btn" onClick={UploadButton}>
        <span>Upload</span>
      </button>
    </div>
    <div className="right-section">
      <button className="btn" onClick={ClosetButton}>
        <span>My Closet</span>
      </button>
    </div>
  </div>
  </div>
  );
};

export default Closet;
