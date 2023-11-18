import "../../css/page.css";
const FamilyInfoTable = ({ biodata }) => {
  const { fatherName, motherName, brotherSiter, eco_socio_status } = biodata;
  return (
    <div className="single_profile_table">
      <table className="min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              Family Information
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Father's Profession
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {fatherName}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Mother's Profession
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {motherName}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              How Many brothers and sister do you have? Write about them.
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {brotherSiter}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Family economic and social status
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {eco_socio_status}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FamilyInfoTable;
