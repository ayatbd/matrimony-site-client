import { useEffect, useState } from "react";
import "../../css/page.css";
import AddressTable from "./AddressTable";
import EduInfoTable from "./EduInfoTable";
import ExpectedPartnerTable from "./ExpectedPartnerTable";
import FamilyInfoTable from "./FamilyInfoTable";
import GenralInfoTable from "./GenralInfoTable";
import MarriageRelatedInfoTable from "./MarriageRelatedInfoTable";
import PersonalInfoTable from "./PersonalInfoTable";
import ProfessionalInfoTable from "./ProfessionalInfoTable";
import man_avatar from "../../../assets/images/male.jpg";
import ScrollToTop from "react-scroll-to-top";
import Container from "../../Shared/Container";
import Loader from "../../Shared/Loader";
import useBiodata from "../../../hooks/useBiodata";
import useAuth from "../../../hooks/useAuth";

const BiodataInfo = () => {
  // const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const [myBiodata, setMyBiodata] = useState("");
  console.log(myBiodata);
  const [biodatas, , isLoading] = useBiodata();

  useEffect(() => {
    if (user && !isLoading) {
      const findedBiodata = biodatas.find(
        (data) => data.userEmail === user.email
      );
      setMyBiodata(findedBiodata);
    }
  }, [biodatas, isLoading, user]);

  if (isLoading) return <Loader></Loader>;
  return (
    <div className="w-full py-14">
      <Container>
        <div>
          <div className="flex md:flex-row flex-col items-start justify-between gap-6">
            <div className="md:w-4/12 w-full space-y-8 py-12 text-white bg-[#660066] rounded-md">
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 rounded-full border p-1"
                  src={man_avatar}
                  alt=""
                />
                <p className="text-[28px] font-semibold">Biodata No.</p>
              </div>
              <div className="">
                <table className="text-center mt-5 w-full text-sm font-light">
                  <tbody className="w-full">
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Gender
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.biodata_type}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Marital Status
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.marital_status}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Born
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.born_year}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Height
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.height}' Inches
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Weight
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.weight} kg
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Complexion
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.complexion}
                      </td>
                    </tr>
                    <tr className="border dark:border-neutral-500 tr-width">
                      <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                        Blood Group
                      </td>
                      <td className="font-[400] text-start px-6 py-[6px]">
                        {myBiodata.blood_group}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="overflow-x-auto md:w-8/12">
              <div className="inline-block min-w-full">
                <div className="overflow-hidden space-y-8">
                  <GenralInfoTable biodata={myBiodata} />
                  <FamilyInfoTable biodata={myBiodata} />
                  <AddressTable biodata={myBiodata} />
                  <PersonalInfoTable biodata={myBiodata} />
                  <EduInfoTable biodata={myBiodata} />
                  <ProfessionalInfoTable biodata={myBiodata} />
                  <MarriageRelatedInfoTable biodata={myBiodata} />
                  <ExpectedPartnerTable biodata={myBiodata} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BiodataInfo;
