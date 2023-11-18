const AddressTable = ({ biodata }) => {
  const { pnt_ads_details, pres_ads_details, grown_up } = biodata;
  return (
    <div className="single_profile_table">
      <table className="min-w-full text-center text-sm font-light">
        <tbody>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td
              colSpan="2"
              className="text-[#530E29] font-semibold text-2xl text-center px-6 py-4 "
            >
              Address
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Permanent Address
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {pnt_ads_details}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Present Address
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {pres_ads_details}
            </td>
          </tr>
          <tr className="border-b dark:border-neutral-500 tr-width">
            <td className="text-start font-bold text-[#72808e] text-[18px] px-6 py-4 tr-border ">
              Where did you grown up?
            </td>
            <td className="font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
              {grown_up}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddressTable;
