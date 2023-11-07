const ProfessionalInfo = ({ register }) => {
  return (
    <div>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">Professional Info</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Write about your profession
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <textarea
            required
            {...register("about_prof", { required: true })}
            type="text"
            placeholder="Type here"
            className="textarea input-bordered w-full"
          />
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Monthly Salary
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <input
            required
            {...register("monthly_salary", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalInfo;
