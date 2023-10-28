import HeroSection from "../Shared/HeroSection";
import CreateBio from "./CreateBio";
import Finding from "./Finding";
import QuickAccess from "./QuickAccess";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Finding />
      <CreateBio />
      <QuickAccess />
      <Statistics />
    </div>
  );
};

export default Home;
