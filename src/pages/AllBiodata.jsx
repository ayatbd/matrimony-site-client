import Container from "./Shared/Container";
import { Link, useLocation } from "react-router-dom";
import male_avatar from "../../src/assets/images/male.jpg";
import female_avatar from "../../src/assets/images/Female.jpg";
import "./css/page.css";
// import useBiodata from "../hooks/useBiodata";
// import Loader from "./Shared/Loader";

const AllBiodata = () => {
  const location = useLocation();
  const filteredData = location.state && location.state.filteredData;
  // const [biodatas, , isLoading] = useBiodata();

  // if (isLoading) return <Loader></Loader>;
  return (
    <div className="p-10">
      <Container>
        <div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-gray-500">All Biodata</p>
            <p className="text-xl text-gray-500">
              Total {filteredData.length} Biodata
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-14">
            {filteredData.map((biodata) => (
              <div
                key={biodata._id}
                className="text-center rounded-md overflow-hidden border border-[#660066]"
              >
                <div className="bg-[#660066] text-center text-white py-5">
                  <img
                    className="w-[90px] h-[90px] rounded-full border p-1 inline"
                    src={
                      biodata.biodata_type === "Male"
                        ? male_avatar
                        : female_avatar
                    }
                    alt={
                      biodata.gender === "male"
                        ? "Male Avatar"
                        : "Female Avatar"
                    }
                  />
                  <p className="text-[25px] font-semibold">Biodata No</p>
                  <p className="text-[25px] font-semibold">5000</p>
                </div>
                <div className="">
                  <table className="text-center mt-5 w-full text-sm font-light">
                    <tbody className="w-full">
                      <tr className="border dark:border-neutral-500 tr-width">
                        <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                          Born
                        </td>
                        <td className="font-[400] text-start px-6 py-[6px]">
                          {biodata.born_year}
                        </td>
                      </tr>
                      <tr className="border dark:border-neutral-500 tr-width">
                        <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                          Height
                        </td>
                        <td className="font-[400] text-start px-6 py-[6px]">
                          {biodata.height}' Inches
                        </td>
                      </tr>
                      <tr className="border dark:border-neutral-500 tr-width">
                        <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                          Weight
                        </td>
                        <td className="font-[400] text-start px-6 py-[6px]">
                          {biodata.weight} kg
                        </td>
                      </tr>
                      <tr className="border dark:border-neutral-500 tr-width">
                        <td className="text-start font-semibold px-6 py-[6px] tr-border ">
                          Complexion
                        </td>
                        <td className="font-[400] text-start px-6 py-[6px]">
                          {biodata.complexion}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col items-center">
                  <Link
                    className="w-2/3 bottom-shadow block bg-gradient-to-r from-[#493240] to-[#FF0099] hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-full
                    px-4 py-3 my-4"
                    to={`/viewbiodata/${biodata._id}`}
                  >
                    <button>See Biodata</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllBiodata;
