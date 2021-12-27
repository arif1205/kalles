import React from "react";
import { Container, SlideContainer } from "./BannerSlider.styles";
import { PrimaryBtn } from "../../Styles/Global.styles";

// Images
import SliderImg1 from "../../Images/Slider1.webp";
import SliderImg2 from "../../Images/Slider2.webp";
import SliderImg3 from "../../Images/Slider3.webp";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Pagination, EffectFade } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, EffectFade]);

const BannerSlider = () => {
	return (
		<Container>
			<Swiper
				modules={[Pagination, EffectFade]}
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				className='mySwiper'>
				{/* slides */}
				<SwiperSlide>
					<SlideContainer bg={SliderImg1}>
						<div className='content'>
							<p className='pre-title'>summer 2022</p>
							<h1 className='title'>New Arrival Collection</h1>
							<PrimaryBtn color='white' bg='var(--dark-color)'>
								Explore Now
							</PrimaryBtn>
						</div>
					</SlideContainer>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContainer bg={SliderImg2}>
						<div className='content content--right'>
							<p className='pre-title'>new season</p>
							<h1 className='title'>Lookbook Collection</h1>
							<PrimaryBtn color='white' bg='var(--dark-color)'>
								Explore Now
							</PrimaryBtn>
						</div>
					</SlideContainer>
				</SwiperSlide>
				<SwiperSlide>
					<SlideContainer bg={SliderImg3}>
						<div className='content'>
							<p className='pre-title'>summer sale</p>
							<h1 className='title'>Save up to 70%</h1>
							<PrimaryBtn color='white' bg='var(--dark-color)'>
								Explore Now
							</PrimaryBtn>
						</div>
					</SlideContainer>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
};

export default BannerSlider;
