import "../css/page.css";
const CreateMyBio = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <tbody>
                  <tr className="border-b dark:border-neutral-500">
                    <td
                      colSpan="2"
                      className="whitespace-nowrap text-2xl text-center px-6 py-4 "
                    >
                      Jacob
                    </td>
                  </tr>
                  <tr className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap text-start font-bold tr-border text-[#72808e] text-[18px] px-6 py-4 ">
                      Jacob
                    </td>
                    <td className="whitespace-nowrap font-[400] text-[#72808e] text-[17px] text-start px-6 py-4">
                      Thornton
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMyBio;
