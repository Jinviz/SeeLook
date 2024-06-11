import React, { useState } from 'react'
import Stylist from '../Stylist/Stylist.js';
import { useNavigate } from 'react-router-dom';
import "../Main/Main.css";

const Lookbook = () => {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/styleupload");
  };

  const LookBookButton = () => {
    navigate("/stylist");
  };

  return (
    <div className="button_container">
      <p class="description">You can see the style of clothes you have worn.</p>
    <div className="main">
      <div className="left-section">
        <button className="btn-lookbook" onClick={UploadButton}>
          <span>Upload</span>
        </button>
      </div>
      <div className="right-section">
        <button className="btn-lookbook" onClick={LookBookButton}>
          <span>My Look</span>
        </button>
      </div>
    </div>
    </div>
  );
}
export default Lookbook
