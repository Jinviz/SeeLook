import React from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { v4 as uuidv4 } from "uuid";
import "./LookBookModal.css";

export default function LookBookModal({
  modalOpen,
  setModalOpen,
  modalTemperature,
  setModalTemperature,
  handleTemperatureInput,
  filteredImages,
  setFilteredImages,
}) {
  // 팝업 창을 닫기 위한 함수
  const closeModal = () => {
    setModalOpen(false);
    setModalTemperature("");
    setFilteredImages("");
  };

  // 입력한 기온 값을 넣기 위한 함수
  const MTemperatureInput = (e) => {
    setModalTemperature(e.target.value);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName="lookbookOverlay"
      className="lookbook-modal"
    >
      <p>오늘의 의상 추천</p>
      <div className="input-button-cotainer">
        <input
          type="text"
          value={modalTemperature}
          onChange={MTemperatureInput}
          placeholder="오늘의 기온을 입력 해주세요"
          className="modaltemperature-input"
        />
        <button
          onClick={handleTemperatureInput}
          className="temperature-submit-button"
        >
          확인
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
        className="lookbook-modal-Swiper"
      >
        {filteredImages.length > 0 ? (
          filteredImages.map((url) => (
            <SwiperSlide key={uuidv4()}>
              <p>
                업로드 시간:{" "}
                {new Date(
                  url.metadata.customMetadata.uploadDate
                ).toLocaleString()}
              </p>
              <img src={url.imageUrl} alt="Filtered" />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>이미지가 없습니다</p>
          </SwiperSlide>
        )}
      </Swiper>
    </Modal>
  );
}
