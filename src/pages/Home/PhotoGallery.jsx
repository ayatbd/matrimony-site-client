import flower from "../../assets/images/flower.png";
import Container from "../Shared/Container";
import img1 from "../../assets/images/p_gallery_1.jpg";
import img2 from "../../assets/images/p_gallery_2.jpg";
import img3 from "../../assets/images/p_gallery_3.jpg";
import img4 from "../../assets/images/p_gallery_4.jpg";
import img5 from "../../assets/images/p_gallery_5.jpg";
import img6 from "../../assets/images/p_gallery_6.jpg";
import img7 from "../../assets/images/p_gallery_9.jpg";
import img8 from "../../assets/images/p_gallery_8.jpg";
const PhotoGallery = () => {
  return (
    <div className="py-20">
      <Container>
        <div className="space-y-20">
          <div>
            <h1 className="text-4xl text-[#530E29] font-bold text-center">
              Photo Gallery
            </h1>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="text-start flex-1">
                <p className="text-[#E33283] mb-2">Collection</p>
                <p className="text-[#530E29] text-2xl font-bold">
                  Wedding Memory
                </p>
                <img className="w-28 h-[70px]" src={flower} alt="" />
              </div>
              <div className="text-end flex-1">
                <button className="md:text-xl bottom-shadow text-[#E33283] py-[6px] md:py-2 px-4 md:px-6 rounded-full border border-[#E33283]">
                  See All
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              <img className="w-full h-[250px]" src={img1} alt="" />
              <img className="w-full h-[250px]" src={img2} alt="" />
              <img className="w-full h-[250px]" src={img3} alt="" />
              <img className="w-full h-[250px]" src={img4} alt="" />
              <img className="w-full h-[250px]" src={img5} alt="" />
              <img className="w-full h-[250px]" src={img6} alt="" />
              <img className="w-full h-[250px]" src={img7} alt="" />
              <img className="w-full h-[250px]" src={img8} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PhotoGallery;
