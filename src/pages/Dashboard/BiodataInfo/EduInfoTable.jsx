const EduInfoTable = ({ biodata }) => {
  const { academic_medium, acad_quali } = biodata;
  return (
    <div className="single_profile_table">
      <table className="min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              Academic Medium
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Academic Medium
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {academic_medium}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Write about your max academic Qualification
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {acad_quali}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EduInfoTable;
