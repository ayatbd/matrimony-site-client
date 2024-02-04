import flower from "../../assets/images/flower.png";
import Container from "../Shared/Container";
import bannerImg1 from "../../assets/images/banner-img-1.jpg";
import bannerImg2 from "../../assets/images/banner-img-2.jpg";
import bannerImg3 from "../../assets/images/banner-img-3.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../css/page.css";

// import required modules
import { Navigation } from "swiper/modules";
const Reviews = () => {
  return (
    <div className="md:py-auto py-20">
      <Container>
        <div>
          <div className="flex flex-col justify-center items-center space-y-3">
            <p className="text-[#D02D77]">Trusted Brand</p>
            <h2 className="text-4xl text-[#530E29] font-bold">
              Trust by 120+ couples
            </h2>
            <img className="w-28 h-20" src={flower} alt="" />
          </div>
          <>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="grid grid-cols-3 gap-20 px-9">
                  <div className="border-2 px-7 py-3 rounded-xl flex flex-col items-center">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={bannerImg1}
                      alt=""
                    />
                    <div className="text-center">
                      <p className="my-5">
                        "Exceptional matrimony website—user-friendly interface,
                        extensive profiles, and effective matchmaking tools.
                        Seamless experience, facilitating meaningful
                        connections. Highly recommended for those seeking a life
                        partner."
                      </p>
                      <p className="text-lg font-bold">Mst. Sadia Akter</p>
                      <p>Dhaka</p>
                    </div>
                  </div>
                  <div className="border-2 px-7 py-3 rounded-xl flex flex-col items-center">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={bannerImg2}
                      alt=""
                    />
                    <div className="text-center">
                      <p className="my-5">
                        "Outstanding matrimony platform—impressive profiles,
                        intuitive navigation, and personalized matchmaking. A
                        reliable choice for those in pursuit of genuine
                        connections and lasting relationships. Highly
                        commendable!"
                      </p>
                      <p className="text-lg font-bold">Mohammad Sami</p>
                      <p>Chottogram</p>
                    </div>
                  </div>
                  <div className="border-2 px-7 py-3 rounded-xl flex flex-col items-center">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={bannerImg3}
                      alt=""
                    />
                    <div className="text-center">
                      <p className="my-5">
                        "Remarkable matrimony website—innovative features,
                        comprehensive profiles, and a seamless user experience.
                        Streamlined matchmaking process for meaningful
                        connections. A top-tier choice for those seeking
                        lifelong companionship."
                      </p>
                      <p className="text-lg font-bold">Arifur Rahman</p>
                      <p>Barishal</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid grid-cols-3 gap-20 px-9">
                  <div className="border-2 px-7 py-3 rounded-xl flex flex-col items-center">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={bannerImg1}
                      alt=""
                    />
                    <div className="text-center">
                      <p className="my-5">
                        "Exceptional matrimony website—user-friendly interface,
                        extensive profiles, and effective matchmaking tools.
                        Seamless experience, facilitating meaningful
                        connections. Highly recommended for those seeking a life
                        partner."
                      </p>
                      <p className="text-lg font-bold">Mst. Sadia Akter</p>
                      <p>Dhaka</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </>
          <div className="text-center my-14">
            <button className="bottom-shadow text-xl bg-[#E33283] text-white rounded-md py-3 px-10">
              More Customer Reviews
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
