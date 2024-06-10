import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export default function Main() {
  const navigate = useNavigate();

  const StyleUploadButton = () => {
    navigate("/StyleUpload");
  };

  const ClothesUploadButton = () => {
    navigate("/ClothesUpload");
  };

  const LookBookButton = () => {
    navigate("/lookBook");
  };

  return (
    <div className="main">
      <div className="main-btn-bundle">
        <div className="upload">
          <button className="upload-btn" onClick={StyleUploadButton}>
            룩북 업로드
          </button>
        </div>
        <div className="upload">
          <button className="upload-btn" onClick={ClothesUploadButton}>
            옷장 업로드
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
