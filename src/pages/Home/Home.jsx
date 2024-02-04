import HeroSection from "./HeroSection";
import Finding from "./Finding";
import QuickAccess from "./QuickAccess";
import Statistics from "./Statistics";
import BiodataCreateSuggest from "./BiodataCreateSuggest";
import PhotoGallery from "./PhotoGallery";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Finding />
      <BiodataCreateSuggest />
      <QuickAccess />
      <Statistics />
      <Reviews />
      <PhotoGallery />
    </div>
  );
};

export default Home;
