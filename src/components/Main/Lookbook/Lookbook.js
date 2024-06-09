import React, { useState } from 'react'
import Photo from '../../Photo/Photo'
import { useNavigate } from 'react-router-dom';
import "../Main.css";

const LookbookPage = () => {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/ImageUpload");
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
}
export default LookbookPage
