import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import 'swiper/css';
import 'swiper/css/pagination';
import './Photo.css';


const Photo = () => {
    const storage = getStorage();
    const filesRef = ref(storage, 'files/uid');

    // (스토리지) => (스토리지 Ref) => listALL -> (res.items) => getDownloadURL -> img src  
    
    async function getImageItems() {
        try{
            const imageFiles = await listAll(filesRef);
            const imageUrls = imageFiles.items.map(async (item) => {
                let imageUrl = await getDownloadURL(item); 
                return imageUrl 
            })
            return(
                <SwiperSlide>
                    <img src={imageUrls}/>
                </SwiperSlide>  
            )
        }catch (error){
            console.log(error)
        }
    }
    // storage에 저장된 파일 리스트를 가져옴
    // listAll(filesRef).then((res) => {
    //     res.items.map(async (itemRef) => {
    //         let itemUrl = await getDownloadURL(itemRef);
    //         <SwiperSlide>
    //             <img src={itemUrl}/>
    //         </SwiperSlide>
    //     });
    // }).catch((error) => {
    //     console.log(error);
    // });
    

    return (
    <>
        {}
        <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        >
        {/* 필터값을 통해 들어오는 이미지 데이터 리스트마다 SwiperSlide로 return */}
            <SwiperSlide>
                <img src='assets/background/background_layout_type_a.jpg'></img>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
    </>
    )
}

export default Photo;
