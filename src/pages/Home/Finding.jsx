import Container from "../Shared/Container";
import "../css/page.css";
import SelectZilla from "./SelectZilla";
import useBiodata from "../../hooks/useBiodata";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Shared/Loader";

const Finding = () => {
  const Navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("All");
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState("All");
  const [selectedAddress, setSelectedAddress] = useState("All");
  //here is api data
  const [biodatas, , isLoading] = useBiodata();
  if (isLoading) return <Loader></Loader>;
  // Filtering function
  const filterBiodatas = () => {
    return biodatas.filter((biodata) => {
      const matchesGender =
        selectedGender === "All" || biodata.biodata_type === selectedGender;
      const matchesMaritalStatus =
        selectedMaritalStatus === "All" ||
        biodata.marital_status === selectedMaritalStatus;
      const matchesAddress =
        selectedAddress === "All" ||
        biodata.present_ads_dis === selectedAddress;
      return matchesGender && matchesMaritalStatus && matchesAddress;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions when the form is submitted (if needed)
    // For example, redirect to a new page with filtered results
  };

  return (
    <div className="bg-gradient-to-r from-[#490B22] to-[#611634] pb-1">
      <Container>
        <div className="py-8 bg-white rounded-xl px-2">
          <div>
            <h2 className="text-[#530E29] text-2xl font-bold">
              Find your right match here
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row items-end justify-between gap-5 pt-9">
                <div className="w-full space-y-3">
                  <label htmlFor="" className="text-[19px] font-[600]">
                    I'm looking for
                  </label>
                  <select
                    value={selectedGender}
                    onChange={(e) => setSelectedGender(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border"
                  >
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="w-full space-y-3">
                  <label htmlFor="" className="text-[19px] font-[600]">
                    Marital Status
                  </label>
                  <select
                    value={selectedMaritalStatus}
                    onChange={(e) => setSelectedMaritalStatus(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border"
                  >
                    <option value="All">All</option>
                    <option value="Never Married">Never Married</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widow">Widow</option>
                    <option value="Widower">Widower</option>
                  </select>
                </div>
                <div className="w-full space-y-3">
                  <label htmlFor="" className="text-[19px] font-[600]">
                    Address
                  </label>
                  <SelectZilla
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                  />
                </div>

                <div className="w-full">
                  <button
                    onClick={() => {
                      const filteredData = filterBiodatas();
                      // Perform actions with filteredData (e.g., update state, redirect to a new page, etc.)
                      console.log(filteredData);
                      Navigate("/allbiodata", { state: { filteredData } });
                    }}
                    className="w-full bottom-shadow text-xl bg-[#E33283] text-white rounded-md py-3 px-6"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Finding;
