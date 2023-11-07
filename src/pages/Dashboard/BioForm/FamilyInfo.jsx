const FamilyInfo = ({ register }) => {
  return (
    <>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">About Family</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Father's Profession
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            name="fatherName"
            {...register("fatherName", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Mother's Profession
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            name="motherName"
            {...register("motherName", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              How Many brothers and sister do you have? Write about them.
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <textarea
            name="brotherSiter"
            type="text"
            {...register("brotherSiter", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Family economic and social status
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <textarea
            type="text"
            {...register("eco_socio_status", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </>
  );
};

export default FamilyInfo;
