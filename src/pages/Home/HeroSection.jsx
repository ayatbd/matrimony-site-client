import Container from "../Shared/Container";
import flower from "../../assets/images/flower.png";
import img1 from "../../assets/images/hero-img1.avif";

const HeroSection = () => {
  return (
    <div className="navHero-bg w-full h-[90vh]">
      <Container>
        <div className="flex flex-col gap-11 items-start pt-24">
          <h1 className="text-4xl text-white font-bold">
            Bangladeshi Muslim <br /> <span className="pink">Matrimony</span>
          </h1>
          <p className="text-white">
            When a person gets married he has completed half of his <br /> deen,
            so let him fear Allah with regard to the other half.
          </p>
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src={img1} />
              </div>
            </div>
          </div>
          <img className="w-28 h-28" src={flower} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
