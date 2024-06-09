import React, { useState } from 'react'
import Photo from '../../Photo/Photo'
import { useNavigate } from 'react-router-dom';
import "../Main.css";

const ClosetPage = () => {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/ImageUpload");
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
}

export default ClosetPage
