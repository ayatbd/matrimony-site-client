import HeroSection from "./HeroSection";
import Finding from "./Finding";
import QuickAccess from "./QuickAccess";
import Statistics from "./Statistics";
import BiodataCreateSuggest from "./BiodataCreateSuggest";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Finding />
      <BiodataCreateSuggest />
      <QuickAccess />
      <Statistics />
      <PhotoGallery />
    </div>
  );
};

export default Home;
