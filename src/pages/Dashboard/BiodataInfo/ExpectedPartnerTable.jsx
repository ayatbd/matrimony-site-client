const ExpectedPartnerTable = ({ biodata }) => {
  const {
    age,
    expected_height,
    expected_comp,
    part_district,
    part_marital_stat,
    part_edu_quali,
    part_occu,
    part_eco_status,
    part_specialty,
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
              Partner that you hope.
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Age
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {age}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Height
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {expected_height}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              complexion
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {expected_comp}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Permanent Address (District)
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {part_district}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Marital Status
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {part_marital_stat}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Educational Qualification
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {part_edu_quali}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Occupation
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {part_occu}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Economical Status
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {part_eco_status}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Specialties and Qualities that you expect from partner?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {part_specialty}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpectedPartnerTable;
