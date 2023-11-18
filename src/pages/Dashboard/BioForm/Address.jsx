const Address = ({ register }) => {
  return (
    <div>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">Address</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Permanent Address
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("pnt_ads_details", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Present Address
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("pres_ads_details", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Where did you grown up?
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("grown_up", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Address;
