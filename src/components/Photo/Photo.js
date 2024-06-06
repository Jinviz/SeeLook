import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
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
    const fetchImageUrls = async (category) => {
      const filesRef = ref(storage, category); // File Ref info
      try {
        const imageFiles = await listAll(filesRef);
        const imageUrls = await Promise.all(
          imageFiles.items.map(async (item) => {
            const imageUrl = await getDownloadURL(item); // 이미지 다운로드 URL 가져오기
            const metadata = await getMetadata(item); // 이미지 메타데이터 가져오기
            const uploadDate = metadata.timeCreated; // 이미지 생성 날짜 가져오기
            return {
              imageUrl,
              metadata: {
                ...metadata,
                customMetadata: {
                  ...metadata.customMetadata,
                  uploadDate, // 생성 날짜를 업로드 날짜로 할당해주기
                },
              },
            };
          })
        );

        // 생성 날짜를 기준으로 이미지 내림차순 정렬
        imageUrls.sort(
          (a, b) =>
            new Date(b.metadata.customMetadata.uploadDate) -
            new Date(a.metadata.customMetadata.uploadDate)
        );

        setFilesUrl(imageUrls);
        console.log(imageUrls);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllImageUrls = async () => {
      const rootRef = ref(storage, "root"); // root 폴더 참조 생성
      try {
        const allImageUrls = []; // 모든 이미지의 Url을 담을 배열
        const rootFolder = await listAll(rootRef); // root 폴더의 모든 항목 목록 가져오기

        // rootFolder.prefixes는 root 폴더 아래의 모든 하위 폴더를 나타내는 배열이다.
        for (const folder of rootFolder.prefixes) {
          // 모든 하위 폴더 순회하기
          const imageFiles = await listAll(folder);
          const imageUrls = await Promise.all(
            imageFiles.items.map(async (item) => {
              const imageUrl = await getDownloadURL(item); // 이미지 다운로드 URL 가져오기
              const metadata = await getMetadata(item); // 이미지 메타데이터 가져오기
              const uploadDate = metadata.timeCreated; // 이미지 생성 날짜 가져오기
              return {
                imageUrl,
                metadata: {
                  ...metadata,
                  customMetadata: {
                    ...metadata.customMetadata,
                    uploadDate, // 생성 날짜를 업로드 날짜로 할당해주기
                  },
                },
              };
            })
          );
          allImageUrls.push(...imageUrls); // imageUrls 배열의 모든 요소를 추가
          // ...을 사용하는 이유는 배열의 요소 하나하나를 저장하기 위함
        }

        // 생성 날짜를 기준으로 이미지 내림차순 정렬
        allImageUrls.sort(
          (a, b) =>
            new Date(b.metadata.customMetadata.uploadDate) -
            new Date(a.metadata.customMetadata.uploadDate)
        );

        setFilesUrl(allImageUrls);
        console.log(allImageUrls);
      } catch (error) {
        console.log(error);
      }
    };

    if (category === "root") {
      fetchAllImageUrls();
    } else {
      fetchImageUrls(category);
    }
  }, [category]);

  return (
    <>
      <div className="category-btn-bundle">
        <button className="category-btn" onClick={() => setCategory("root")}>
          전체
        </button>
        <button
          className="category-btn"
          onClick={() => setCategory("root/캐주얼")}
        >
          캐주얼
        </button>
        <button
          className="category-btn"
          onClick={() => setCategory("root/미니멀")}
        >
          미니멀
        </button>
        <button
          className="category-btn"
          onClick={() => setCategory("root/스트릿")}
        >
          스트릿
        </button>
      </div>
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
          filesUrl.map((url) => (
            <SwiperSlide key={uuidv4()}>
              <img src={url.imageUrl} alt="Uploaded" />
              <p>
                업로드 시간:{" "}
                {new Date(
                  url.metadata.customMetadata.uploadDate
                ).toLocaleString()}
              </p>
            </SwiperSlide>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </>
  );
};

export default Photo;
