import { useLoaderData } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Container from "./Shared/Container";
import GenralInfoTable from "./Dashboard/BiodataInfo/GenralInfoTable";
import FamilyInfoTable from "./Dashboard/BiodataInfo/FamilyInfoTable";
import AddressTable from "./Dashboard/BiodataInfo/AddressTable";
import PersonalInfoTable from "./Dashboard/BiodataInfo/PersonalInfoTable";
import EduInfoTable from "./Dashboard/BiodataInfo/EduInfoTable";
import ProfessionalInfoTable from "./Dashboard/BiodataInfo/ProfessionalInfoTable";
import MarriageRelatedInfoTable from "./Dashboard/BiodataInfo/MarriageRelatedInfoTable";
import ExpectedPartnerTable from "./Dashboard/BiodataInfo/ExpectedPartnerTable";
import man_avatar from "../assets/images/male-avatar.png";
import female_avatar from "../assets/images/Female-avater.png";

const SingleBiodata = () => {
  const biodata = useLoaderData();
  return (
    <div className="w-full py-14">
      <ScrollToTop top="800" color="#fff" smooth />
      <Container>
        <div>
          <div className="flex items-start justify-between gap-6">
            <div className="w-4/12 space-y-8 py-12 text-white bg-[#660066] rounded-md">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full border p-1"
                  src={
                    biodata.biodata_type === "Male" ? man_avatar : female_avatar
                  }
                  alt=""
                />
                <p className="text-[28px] font-semibold">Biodata No.</p>
              </div>
              <div className="flex w-full flex-col items-center p-3">
                <table className="text-center w-full text-sm font-light">
                  <tbody className="flex w-full flex-col gap-2">
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Academic Medium
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        Thornton
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Academic Medium
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.academic_medium}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Academic Medium
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        Thornton
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Academic Medium
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        Thornton
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Academic Medium
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        Thornton
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Academic Medium
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.academic_medium}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="overflow-x-auto w-8/12">
              <div className="inline-block min-w-full">
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
        </div>
      </Container>
    </div>
  );
};

export default SingleBiodata;
