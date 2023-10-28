import HeroSection from "../Shared/HeroSection";
import CreateBio from "./CreateBio";
import Finding from "./Finding";
import QuickAccess from "./QuickAccess";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Finding />
      <CreateBio />
      <QuickAccess />
    </div>
  );
};

export default Home;
