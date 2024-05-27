import { getStorage, ref } from "firebase/storage";
import { useState } from "react";
import { FiImage } from "react-icons/fi";

export default function ImageUpload() {
  const [image, setImage] = useState("");

  const imageStorage = getStorage();
  const imageRef = ref(imageStorage, "");

  const FileUpLoad = (Event) => {
    const {
      target: { files },
    } = Event;

    const file = files?.[0];
    const fileReader = new FileReader();
    fileReader?.readAsDataURL(file);

    fileReader.onloadend = (Event) => {
      const { result } = Event?.currentTarget;
      setImage(result);
    };
  };

  return (
    <div className="image-area">
      <label htmlFor="file-input" className="image-area__file">
        <FiImage size="30" className="post-form__file-icon" />
      </label>
      <input
        type="file"
        name="file-input"
        id="file-input"
        accept="image/*"
        onChange={FileUpLoad}
      />
      {image && (
        <div className="image-attachment">
          <img src={image} alt="attachment" width={500} height={500} />
        </div>
      )}
    </div>
  );
}
