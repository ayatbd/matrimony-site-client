const PageBanner = ({ heading }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[35vh] bg-gradient-to-r from-[#493240] to-[#FF0099]">
      <h3 className="text-4xl text-white font-bold">{heading}</h3>
    </div>
  );
};

export default PageBanner;
