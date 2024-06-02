import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export default function Main() {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/ImageUpload");
  };

  const LookBookButton = () => {
    navigate("/lookBook");
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
