import React from 'react'
import "./Home.css"
import Product from './Product'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



function Home() {
  return (
    <div className='home'>
      <div className='home101'>
        <img className='home_img' src='front_photo.png' alt=''/>
        <h2 className='htitle'>Anime T-shirts</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><Product 
        id="102"
        title="Red T-shirt"
        price={699}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Blue T-shirt"
        price={230}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Green T-shirt"
        price={450}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Yellow T-shirt"
        price={350}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Pink T-shirt"
        price={300}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        
      </Swiper>
      
      </div>
      <hr />
      <div className='home102'>
        
        <h2 className='htitle'>Custome T-shirts</h2>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 4800,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide><Product 
        id="102"
        title="Red T-shirt"
        price={429}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Blue T-shirt"
        price={399}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Green T-shirt"
        price={220}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Yellow T-shirt"
        price={140}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        <SwiperSlide><Product 
        id="102"
        title="Pink T-shirt"
        price={200}
        rating={5}
        image='front_photo.png'
        /></SwiperSlide>
        
      </Swiper>

      </div>
         <hr />
       
    </div>
   
  )
}

export default Home

