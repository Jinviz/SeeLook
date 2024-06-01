import { getStorage, ref, uploadString } from "firebase/storage";
import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { v4 as uuidv4 } from "uuid";
import "./ImageUpload.css";
import Category from "../Category/Category";

export default function ImageUpload() {
  const [image, setImage] = useState(""); // 이미지를 저장하기 위한 state
  const [isSubmit, setIsSubmit] = useState(Boolean); // 파일을 업로드 하는지 상태를 파악하기 위한 state
  const [category, setCategory] = useState(""); // 카테고리를 저장하기 위한 state
  const [temperature, setTemperature] = useState(""); // 기온을 저장하기 위한 state

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

  // 선택한 이미지를 삭제하기 위한 함수
  const FileDelete = () => {
    setImage(null);
  };

  const TemperatureInput = (e) => {
    setTemperature(e.target.value);
  };

  // 이미지를 업로드하기 위한 함수
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const storage = getStorage();
    const filePath = `${category}/${uuidv4()}`;
    const fileRef = ref(storage, filePath);

    const metadata = {
      customMetadata: {
        temperature: temperature,
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
      <div className="image-area">
        <label htmlFor="file-input" className="image-area__file">
          <FiImage size="30" className="post-form__file-icon" />
        </label>
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="image-select"
          accept="image/*"
          onChange={FileSelect}
        />
        {image && (
          <div className="image-attachment">
            <img src={image} alt="attachment" width={500} height={500} />
            <button
              className="image-clear-btn"
              type="button"
              onClick={FileDelete}
            >
              Clear
            </button>
          </div>
        )}
        <input
          type="text"
          value={temperature}
          onChange={TemperatureInput}
          placeholder="기온을 입력 해주세요"
          className="temperature-input"
        />
        <Category category={category} setCategory={setCategory} />
        <input
          type="submit"
          value="Upload"
          className="image-submit-btn"
          onClick={onSubmit}
          disabled={isSubmit}
        />
      </div>
    </div>
  );
}