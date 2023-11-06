const PersonalInfo = () => {
  return (
    <div>
      <div className="mt-10 mb-5">
        <p className="font-bold text-2xl px-5">Personal Information</p>
      </div>
      <div className="bio-form border">
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Can you recite the Quran correctly?
            </span>
            <span className="text-[22px] text-red-600">*</span>
          </label>
          <select className="input input-bordered w-full">
            <option>Yes</option>
            <option>Not</option>
          </select>
        </div>
        <div className="form-control w-full px-5">
          <label className="label flex justify-start items-center gap-1">
            <span className="label-text text-[17px] font-[600] text-black">
              Do you accomplish salah daily five times?
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
              How many years you accomplish salah daily?
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
              Which Majhab do you follow?
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
              Write at least names of your three favourite Islamic Scholars.
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
              Do you have any physical or mental disease?
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
              Do you watch or hear song/serial/drama/cinema?
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
              Do you have any bed side that you want to mention?
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
              Write something about yourself.
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

export default PersonalInfo;
