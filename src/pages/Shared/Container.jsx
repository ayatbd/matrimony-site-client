const Container = ({ children }) => {
  return (
    <div className="max-w-[1140px] mx-auto md:px-4 sm:px-2 px-1 box">
      {children}
    </div>
  );
};

export default Container;
