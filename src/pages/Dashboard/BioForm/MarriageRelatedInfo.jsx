const MarriageRelatedInfo = () => {
  return (
    <div>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">Marriage related information</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Are your guardian agreed to your marriage?
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
              What is your thinking and why do you want to marry?
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <textarea
            required
            type="text"
            placeholder="Type here"
            className="textarea input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              What is your thinking about family planning?
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <textarea
            required
            type="text"
            placeholder="Type here"
            className="textarea input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MarriageRelatedInfo;
