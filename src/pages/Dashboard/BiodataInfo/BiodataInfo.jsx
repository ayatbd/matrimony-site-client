import { useEffect, useState } from "react";
import "../../css/page.css";
import BiodataInfoCard from "./BiodataInfoCard";
import ScrollToTop from "react-scroll-to-top";
import Container from "../../Shared/Container";
import Loader from "../../Shared/Loader";
import useAdmin from "../../../hooks/useAdmin";
import useBiodata from "../../../hooks/useBiodata";

const BiodataInfo = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const [biodatas, refetch, isLoading] = useBiodata();

  if (isLoading) return <Loader></Loader>;
  return (
    <div className="w-full py-14">
      <ScrollToTop top="800" color="#fff" smooth />
      <Container>
        <div>
          {biodatas.map((biodata) => (
            <BiodataInfoCard
              key={biodata._id}
              biodata={biodata}
            ></BiodataInfoCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BiodataInfo;
