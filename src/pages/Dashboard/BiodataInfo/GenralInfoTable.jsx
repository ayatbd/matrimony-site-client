const GenralInfo = ({ biodata }) => {
  const {
    biodata_type,
    marital_status,
    present_ads_div,
    present_ads_dis,
    pnt_ads_div,
    pnt_ads_dis,
    born_year,
    height,
    complexion,
    blood_group,
    weight,
    profession,
  } = biodata;
  return (
    <div className="single_profile_table">
      <table className=" min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              General Information
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Biodata No.
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              Thornton
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Type of Biodata
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {biodata_type}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Marital Status
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {marital_status}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Present Address (Division)
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {present_ads_div}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Present Address (District)
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {present_ads_dis}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Permanent Address (Division)
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {pnt_ads_div}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Permanent Address (District)
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {pnt_ads_dis}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Born Year (Real)
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {born_year}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Height
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {height}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Complexion
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {complexion}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Blood Group
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {blood_group}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Weight
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {weight}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Profession
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {profession}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GenralInfo;
