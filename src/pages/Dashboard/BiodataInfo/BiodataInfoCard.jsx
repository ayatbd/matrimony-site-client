import AddressTable from "./AddressTable";
import EduInfoTable from "./EduInfoTable";
import ExpectedPartnerTable from "./ExpectedPartnerTable";
import FamilyInfoTable from "./FamilyInfoTable";
import GenralInfoTable from "./GenralInfoTable";
import MarriageRelatedInfoTable from "./MarriageRelatedInfoTable";
import PersonalInfoTable from "./PersonalInfoTable";
import ProfessionalInfoTable from "./ProfessionalInfoTable";

const BiodataInfoCard = ({ biodata }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden space-y-8">
            <GenralInfoTable biodata={biodata} />
            <FamilyInfoTable biodata={biodata} />
            <AddressTable biodata={biodata} />
            <PersonalInfoTable biodata={biodata} />
            <EduInfoTable biodata={biodata} />
            <ProfessionalInfoTable biodata={biodata} />
            <MarriageRelatedInfoTable biodata={biodata} />
            <ExpectedPartnerTable biodata={biodata} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataInfoCard;
