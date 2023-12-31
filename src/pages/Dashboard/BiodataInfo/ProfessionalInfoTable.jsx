const ProfessionalInfoTable = ({ biodata }) => {
  const { about_prof, monthly_salary } = biodata;
  return (
    <div className="single_profile_table">
      <table className="min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              Professional Information
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Write about your profession
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {about_prof}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Monthly Salary
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {monthly_salary}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfessionalInfoTable;
