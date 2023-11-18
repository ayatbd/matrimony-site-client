const MarriageRelatedInfoTable = ({ biodata }) => {
  const { guardian_agree, marriage_thinking, f_plan_thinking } = biodata;
  return (
    <div className="single_profile_table">
      <table className="min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              Marriage Related Information
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Are your guardian agreed to your marriage?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {guardian_agree}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              What is your thinking and why do you want to marry?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {marriage_thinking}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              What is your thinking about family planning?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {f_plan_thinking}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MarriageRelatedInfoTable;
