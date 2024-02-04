import flower from "../../assets/images/flower.png";
import Container from "../Shared/Container";
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
                <div className="flex items-center justify-between gap-20">
                  <div className="border-2 px-7 py-3 rounded-xl">
                    <img src="" alt="" />
                    <div className="space-y-3">
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Minus accusantium voluptatibus quasi nesciunt,
                        possimus, aut placeat vitae eius debitis aspernatur
                        officia voluptate corporis nam recusandae sit
                        perspiciatis mollitia, officiis error!
                      </p>
                      <p className="text-lg font-bold">Mst. Sadia Akter</p>
                      <p>Dhaka</p>
                    </div>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Minus accusantium voluptatibus quasi nesciunt, possimus,
                      aut placeat vitae eius debitis aspernatur officia
                      voluptate corporis nam recusandae sit perspiciatis
                      mollitia, officiis error!
                    </p>
                    <p>Mst. Sadia Akter</p>
                    <p>Dhaka</p>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Minus accusantium voluptatibus quasi nesciunt, possimus,
                      aut placeat vitae eius debitis aspernatur officia
                      voluptate corporis nam recusandae sit perspiciatis
                      mollitia, officiis error!
                    </p>
                    <p>Mst. Sadia Akter</p>
                    <p>Dhaka</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
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
