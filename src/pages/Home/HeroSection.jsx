import Container from "../Shared/Container";
import flower from "../../assets/images/flower.png";
import img1 from "../../assets/images/hero-img1.avif";
import img2 from "../../assets/images/hero-img2.jpg";
import img3 from "../../assets/images/hero-img3.jpg";
import img4 from "../../assets/images/hero-img4.jpg";
import { AiFillStar } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="navHero-bg w-full md:h-[90vh]">
      <Container>
        <div className="flex flex-col gap-5 md:gap-11 items-center md:items-start pt-16 md:pt-24 px-4">
          <h1 className="text-4xl text-center md:text-start text-white font-bold">
            Bangladeshi Muslim <br /> <span className="pink">Matrimony</span>
          </h1>
          <p className="text-white text-center md:text-start">
            When a person gets married he has completed half of his{" "}
            <br className="hidden md:inline" /> deen, so let him fear Allah with
            regard to the other half.
          </p>
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img3} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img4} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img2} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img className="w-28 h-28" src={flower} alt="" />
            <div className="flex items-center gap-3">
              <AiFillStar size="28" className="pink" />
              <ul className="flex items-center gap-[2px]">
                <li className="text-white bg-[#E33283] p-[2px] rounded-sm">
                  <AiFillStar />
                </li>
                <li className="text-white bg-[#E33283] p-[2px] rounded-sm">
                  <AiFillStar />
                </li>
                <li className="text-white bg-[#E33283] p-[2px] rounded-sm">
                  <AiFillStar />
                </li>
                <li className="text-white bg-[#E33283] p-[2px] rounded-sm">
                  <AiFillStar />
                </li>
                <li className="text-white bg-[#E33283] p-[2px] rounded-sm">
                  <AiFillStar />
                </li>
              </ul>
              <span className="text-white">4.5/5</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
