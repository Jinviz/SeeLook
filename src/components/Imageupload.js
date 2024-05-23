import { getStorage, ref } from "firebase/storage";
import { useState } from "react";

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
      <input
        type="file"
        name="file-input"
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
