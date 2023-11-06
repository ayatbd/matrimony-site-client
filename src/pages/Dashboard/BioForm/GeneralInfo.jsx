import SelectZilla from "../../Home/SelectZilla";
import Feet from "./Feet";
import Profesion from "./Profesion";
import Weight from "./Weight";
import Year from "./Year";

const GeneralInfo = () => {
  return (
    <div>
      <div className="py-5">
        <p className="font-bold text-2xl px-5">General Information</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Your full name
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Type of Biodata
            </span>
            <span className="text-[22px] text-red-600">**</span>
          </label>
          <select required className="input input-bordered w-full">
            <option>Male's Biodata</option>
            <option>Female's Biodata</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Marital Status
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>Never Married</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Widow</option>
            <option>Widower</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Present Address (Division)
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>Dhaka Division</option>
            <option>Chottogram Division</option>
            <option>Rajshahi Division</option>
            <option>Sylhet Division</option>
            <option>Khulna Division</option>
            <option>Rangpur Division</option>
            <option>Rajshahi Division</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Present Address (District)
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <SelectZilla />
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Permanent Address (Division)
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>Dhaka Division</option>
            <option>Chottogram Division</option>
            <option>Rajshahi Division</option>
            <option>Sylhet Division</option>
            <option>Khulna Division</option>
            <option>Rangpur Division</option>
            <option>Rajshahi Division</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Permanent Address (District)
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <SelectZilla />
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Born Year (Real)
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <Year />
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Height
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <Feet />
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              complexion
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>Very Fair</option>
            <option>Fair</option>
            <option>Black</option>
            <option>Brown</option>
            <option>Light Brown</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Blood Group
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>Unknown</option>
            <option>A+</option>
            <option>A-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>B+</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Weight
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <Weight />
          </select>
        </div>
        <Profesion />
      </div>
    </div>
  );
};

export default GeneralInfo;
