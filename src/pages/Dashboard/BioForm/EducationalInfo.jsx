const EducationalInfo = () => {
  return (
    <div>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">Educational Qualification</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Academic Medium
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>General</option>
            <option>Madrasah</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Write about your max academic Qualification
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
      </div>
    </div>
  );
};

export default EducationalInfo;
