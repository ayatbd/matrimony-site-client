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
import man_avatar from "../assets/images/male.jpg";
import female_avatar from "../assets/images/Female.jpg";

const SingleBiodata = () => {
  const biodata = useLoaderData();
  return (
    <div className="w-full py-10">
      <Container>
        <div>
          <div className="flex md:flex-row flex-col items-start justify-between gap-6">
            <div className="md:w-4/12 w-full space-y-8 py-12 text-white bg-[#660066] rounded-md">
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
                  <tbody className="">
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Gender
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.biodata_type}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Marital Status
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.marital_status}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Born Year
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.born_year}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Height
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.height}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Complexion
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.complexion}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Weight
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.weight}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-2 tr-border ">
                        Blood Group
                      </td>
                      <td className="font-[400] text-start px-6 py-2">
                        {biodata.blood_group}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="overflow-x-auto md:w-8/12">
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
