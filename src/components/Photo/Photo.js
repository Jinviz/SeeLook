import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import "swiper/css";
import "swiper/css/pagination";
import "./Photo.css";

const Photo = () => {
  const storage = getStorage(); // Get firebase storage
  const [category, setCategory] = useState("root"); // 기본 카테고리 root
  const [filesUrl, setFilesUrl] = useState([]); // File Url List

  // (스토리지) => (스토리지 Ref) => listALL -> (res.items) => getDownloadURL -> img src

  useEffect(() => {
    const fetchgImageUrls = async (category) => {
      const filesRef = ref(storage, category); // File Ref info
      try {
        const imageFiles = await listAll(filesRef);
        const imageUrls = await Promise.all(
          imageFiles.items.map(async (item) => {
            let imageUrl = await getDownloadURL(item);
            return imageUrl;
          })
        );
        setFilesUrl(imageUrls);
        console.log(imageUrls);
      } catch (error) {
        console.log(error);
      }
    };
    fetchgImageUrls(category);
  }, [category]);

  return (
    <>
      <div>
        <button onClick={() => setCategory("root/캐주얼")}>캐주얼</button>
        <button onClick={() => setCategory("root/미니멀")}>미니멀</button>
        <button onClick={() => setCategory("root/스트릿")}>스트릿</button>
      </div>
      {}
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {filesUrl.length > 0 ? (
          filesUrl.map((url) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <img src={url} />
              </SwiperSlide>
            );
          })
        ) : (
          <></>
        )}
      </Swiper>
    </>
  );
};

export default Photo;
