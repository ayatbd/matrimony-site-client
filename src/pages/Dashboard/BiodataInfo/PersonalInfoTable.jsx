const PersonalInfoTable = ({ biodata }) => {
  const {
    quran_rec_quest,
    salah_accom,
    salah_accom_year,
    majhab_follow,
    fav_scholar,
    disease_info,
    watch_hear,
    bed_side,
    about_self,
  } = biodata;
  return (
    <div className="single_profile_table">
      <table className="min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              Personal Information
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Can you recite the Quran correctly?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {quran_rec_quest}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Do you accomplish salah daily five times?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {salah_accom}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              How many years you accomplish salah daily?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {salah_accom_year}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Which Majhab do you follow?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {majhab_follow}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Write at least names of your three favourite Islamic Scholars.
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {fav_scholar}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Do you have any physical or mental disease?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {disease_info}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Do you watch or hear song, serial, drama, cinema?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {watch_hear}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Do you have any bed side that you want to mention?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {bed_side}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Write something about yourself.
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {about_self}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PersonalInfoTable;
