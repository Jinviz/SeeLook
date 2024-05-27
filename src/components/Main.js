import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const UploadButton = () => {
    navigate("/ImageUpload");
  };

  const LookBookButton = () => {
    navigate("/LookBook");
  };

  return (
    <div className="main">
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
  );
}
