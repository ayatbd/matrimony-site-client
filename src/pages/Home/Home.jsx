import HeroSection from "./HeroSection";
import Finding from "./Finding";
import QuickAccess from "./QuickAccess";
import Statistics from "./Statistics";
import BiodataCreateSuggest from "./BiodataCreateSuggest";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Finding />
      <BiodataCreateSuggest />
      <QuickAccess />
      <Statistics />
    </div>
  );
};

export default Home;
