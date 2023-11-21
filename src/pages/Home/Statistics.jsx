import Container from "../Shared/Container";
import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import img1 from "../../assets/images/img-3.jpg";
import img2 from "../../assets/images/img-4.jpg";

const Statistics = () => {
  return (
    <div className="py-24">
      <Container>
        <div>
          <div>
            <h1 className="text-4xl text-[#530E29] font-bold text-center">
              <span className="pink">WeddingWonders</span> User Statistics
            </h1>
          </div>
          <div className="mt-16 md:flex items-center justify-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  className="w-[250px] h-[320px] rounded-xl"
                  src={img1}
                  alt=""
                />
                <img
                  className="absolute border-l-8 border-t-8 border-white h-[180px] w-[250px] bottom-0 left-[15%] rounded-tr-[50px] rounded-bl-[50px]"
                  src={img2}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div>
                <h2 className="text-3xl text-center md:text-start text-[#530E29] font-bold">
                  Welcome to
                </h2>
                <h3 className="pink text-center md:text-start text-2xl font-bold">
                  Wedding Matrimony
                </h3>
              </div>

              <p className="text-center md:text-start">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quisquam harum provident velit excepturi doloremque voluptates
                distinctio dicta accusamus dolore nostrum.
              </p>
              <p className="text-center md:text-start">
                <Link className="pink">Click here</Link> to start your matrimony
                service now
              </p>
              <p className="text-center md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium ut, nisi cupiditate cum reprehenderit tempora
                pariatur qui sed totam. Amet!
              </p>
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center gap-1">
                  <BiPhoneCall className="bg-[#E33283] text-white border border border-indigo-600 p-2 w-8 h-8 rounded-full" />
                  <div>
                    <p>Enquiry</p>
                    <p className="text-black font-bold">+8801946574645</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <BiPhoneCall className="bg-[#E33283] text-white border border border-indigo-600 p-2 w-8 h-8 rounded-full" />
                  <div>
                    <p>Get Support</p>
                    <p className="text-black font-bold">info@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
