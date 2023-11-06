const Profesion = () => {
  return (
    <div className="form-control w-full px-5">
      <label className="label flex justify-start items-center gap-1">
        <span className="label-text text-[17px] font-[600] text-black">
          Profession
        </span>
        <span className="text-[22px] text-red-600">*</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default Profesion;
