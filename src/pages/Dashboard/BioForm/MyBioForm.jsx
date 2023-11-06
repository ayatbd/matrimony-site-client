import ScrollToTop from "react-scroll-to-top";
import Address from "./Address";
import EducationalInfo from "./EducationalInfo";
import FamilyInfo from "./FamilyInfo";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import MarriageRelatedInfo from "./MarriageRelatedInfo";
import ExpectedPartner from "./ExpectedPartner";
import GeneralInfo from "./GeneralInfo";
import "../../css/page.css";

const MyBioForm = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <ScrollToTop top="800" color="#fff" smooth />
        <form className="">
          <GeneralInfo></GeneralInfo>
          <FamilyInfo></FamilyInfo>
          <Address></Address>
          <PersonalInfo></PersonalInfo>
          <EducationalInfo></EducationalInfo>
          <ProfessionalInfo></ProfessionalInfo>
          <MarriageRelatedInfo></MarriageRelatedInfo>
          <ExpectedPartner></ExpectedPartner>
          <div className="text-center mt-10">
            <button className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block">
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">Button Text</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyBioForm;
