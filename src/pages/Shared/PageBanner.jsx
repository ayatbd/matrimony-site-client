const PageBanner = ({ heading }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[22vh] md:h-[35vh] bg-gradient-to-r from-[#493240] to-[#FF0099]">
      <h3 className="md:text-4xl text-3xl text-white font-bold">{heading}</h3>
    </div>
  );
};

export default PageBanner;
