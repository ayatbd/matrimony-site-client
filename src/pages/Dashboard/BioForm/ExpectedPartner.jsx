import SelectZilla from "../../Home/SelectZilla";

const ExpectedPartner = ({ register }) => {
  return (
    <div>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">Partner you are looking for</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Age
              <span className="text-[15px] font-normal ml-5">
                (such as from 18 to 25)
              </span>
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            {...register("age", { required: true })}
            required
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Height
              <span className="text-[15px] font-normal ml-5">
                (such as from 4" to 5'7")
              </span>
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            {...register("expected_height", { required: true })}
            required
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              complexion
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select
            {...register("expected_comp", { required: true })}
            className="input input-bordered w-full"
          >
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
              Permanent Address (District)
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select
            {...register("part_district", { required: true })}
            className="input input-bordered w-full"
          >
            <SelectZilla />
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Marital Status
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select
            {...register("part_marital_stat", { required: true })}
            className="input input-bordered w-full"
          >
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
              Educational Qualification
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("part_edu_quali", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Occupation
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("part_occu", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Economical Status
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("part_eco_status", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Specialties and Qualities that you expect from partner?
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <textarea
            required
            {...register("part_specialty", { required: true })}
            type="text"
            placeholder="Type here"
            className="textarea input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpectedPartner;
