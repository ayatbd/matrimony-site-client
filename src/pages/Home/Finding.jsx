import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import "../css/page.css";
import SelectZilla from "./SelectZilla";

const Finding = () => {
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
            <form>
              <div className="flex items-end justify-between gap-5 pt-9">
                <div className="w-full space-y-3">
                  <label htmlFor="" className="text-[19px] font-[600]">
                    I'm looking for
                  </label>
                  <select className="w-full px-4 py-3 rounded-md border">
                    <option>All</option>
                    <option>Male's Biodata</option>
                    <option>Female's Biodata</option>
                  </select>
                </div>
                <div className="w-full space-y-3">
                  <label htmlFor="" className="text-[19px] font-[600]">
                    Marital Status
                  </label>
                  <select className="w-full px-4 py-3 rounded-md border">
                    <option>All</option>
                    <option>Never Married</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widow</option>
                    <option>Widower</option>
                  </select>
                </div>
                <div className="w-full space-y-3">
                  <label htmlFor="" className="text-[19px] font-[600]">
                    Address
                  </label>
                  <select className="w-full px-4 py-3 rounded-md border">
                    <SelectZilla />
                  </select>
                </div>

                <div className="w-full">
                  <button className="w-full bottom-shadow text-xl bg-[#E33283] text-white rounded-md py-3 px-6">
                    <Link to="/allbiodata">Search</Link>
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
