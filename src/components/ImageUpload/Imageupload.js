import { getStorage, ref, uploadString } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { app } from "../../firebaseApp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiImage } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import "./ImageUpload.css";
import Category from "../Category/Category";

export default function ImageUpload() {
  const [image, setImage] = useState(""); // 이미지를 저장하기 위한 state
  const [isSubmit, setIsSubmit] = useState(Boolean); // 파일을 업로드 하는지 상태를 파악하기 위한 state
  const [category, setCategory] = useState(""); // 카테고리를 저장하기 위한 state
  const [temperature, setTemperature] = useState(""); // 기온을 저장하기 위한 state
  const navigate = useNavigate(); // 메인 버튼을 누를 시 Router 처리를 위한 navigate
  const auth = getAuth(app); //firebase 인증 객체 가져오기
  const user = auth.currentUser; // 현재 사용자의 정보 가져오기

  // 파일을 선택 했을 때 읽어오는 함수
  const FileSelect = (e) => {
    const {
      target: { files },
    } = e;
    const file = files?.[0];
    const fileReader = new FileReader();
    fileReader?.readAsDataURL(file);
    fileReader.onloadend = (e) => {
      const { result } = e?.currentTarget;
      setImage(result);
    };
  };

  // 메인 버튼 누를 시 메인 페이지로 이동
  const MainBtn = () => {
    navigate("/Main");
  };

  // 선택한 이미지를 삭제하기 위한 함수
  const FileDelete = () => {
    setImage(null);
  };

  // 입력한 기온 값을 넣기 위한 함수
  const TemperatureInput = (e) => {
    setTemperature(e.target.value);
  };

  // 이미지를 업로드하기 위한 함수
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const storage = getStorage();
    const filePath = `root/${category}/${uuidv4()}`; // 이미지가 저장되는 경로
    const fileRef = ref(storage, filePath);

    // 입력한 온도 및 현재 사용자 정보를 메타데이터로 보내기 위한 선언
    const metadata = {
      customMetadata: {
        temperature: temperature, // 입력한 온도 값
        user: user.email, // 유저의 이메일
      },
    };

    const response = await uploadString(fileRef, image, `data_url`, metadata);
    console.log(response);
    setImage(null); // 업로드 후 선택한 파일 제거
    setCategory(""); // 업로드 후 선택한 카테고리 제거
    setTemperature(""); // 업로드 후 기온 제거
    setIsSubmit(false);
  };

  return (
    <div className="image">
      <button className="main-btn" type="button" onClick={MainBtn}>
        메인
      </button>
      <div className="image-area">
        <label htmlFor="file-input" className="image-area__file">
          <FiImage size="30" className="file-icon" />
        </label>
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="image-select"
          accept="image/*"
          onChange={FileSelect}
        />
        <input
          type="text"
          value={temperature}
          onChange={TemperatureInput}
          placeholder="기온을 입력 해주세요"
          className="temperature-input"
        />

        <Category category={category} setCategory={setCategory} />
        {image && (
          <div className="image-attachment">
            <img src={image} alt="attachment" />
            <input
              type="submit"
              value="업로드"
              className="image-submit-btn"
              onClick={onSubmit}
              disabled={isSubmit}
            />
            <button
              className="image-clear-btn"
              type="button"
              onClick={FileDelete}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
