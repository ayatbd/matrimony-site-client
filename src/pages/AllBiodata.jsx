import Container from "./Shared/Container";
import { Link } from "react-router-dom";
import male_avatar from "../../src/assets/images/male-avatar.png";
import female_avatar from "../../src/assets/images/Female-avater.png";
import "./css/page.css";
import useBiodata from "../hooks/useBiodata";
import Loader from "./Shared/Loader";

const AllBiodata = () => {
  const [biodatas, , isLoading] = useBiodata();

  if (isLoading) return <Loader></Loader>;
  return (
    <div className="p-10">
      <Container>
        <div>
          <div className="text-center space-y-2">
            <p className="text-4xl font-bold text-gray-500">All Biodata</p>
            <p className="text-xl text-gray-500">
              Total {biodatas.length} Biodata
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 py-14">
            {biodatas.map((biodata) => (
              <div
                key={biodata._id}
                className="text-center rounded-md overflow-hidden border border-[#660066]"
              >
                <div className="bg-[#660066] text-center text-white py-5">
                  <img
                    className="w-24 h-24 rounded-full border p-1 inline"
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
                  <p className="text-[28px] font-semibold">Biodata No</p>
                  <p className="text-[28px] font-semibold">5000</p>
                </div>
                <div className="">
                  <table className="text-center mt-5 w-full text-sm font-light">
                    <tbody className="w-full">
                      <tr className="border dark:border-neutral-500 tr-width">
                        <td className="text-start font-semibold px-6 py-2 tr-border ">
                          Born
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
                          {biodata.height}' Inches
                        </td>
                      </tr>
                      <tr className="border dark:border-neutral-500 tr-width">
                        <td className="text-start font-semibold px-6 py-2 tr-border ">
                          Weight
                        </td>
                        <td className="font-[400] text-start px-6 py-2">
                          {biodata.weight} kg
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
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col items-center">
                  <button
                    className="w-2/3 bottom-shadow block bg-gradient-to-r from-[#493240] to-[#FF0099] hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-full
                    px-4 py-3 my-4"
                  >
                    <Link>See Biodata</Link>
                  </button>
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
