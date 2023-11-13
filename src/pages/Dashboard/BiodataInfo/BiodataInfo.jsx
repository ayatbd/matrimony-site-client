import { useEffect, useState } from "react";
import "../../css/page.css";
import BiodataInfoCard from "./BiodataInfoCard";
import ScrollToTop from "react-scroll-to-top";
import Container from "../../Shared/Container";
import Loader from "../../Shared/Loader";

const BiodataInfo = () => {
  const [biodatas, setBiodatas] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/biodata")
      .then((res) => res.json())
      .then((data) => {
        setBiodatas(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-full">
      <Container>
        <ScrollToTop top="800" color="#fff" smooth />
        {biodatas.map((biodata) => (
          <BiodataInfoCard
            key={biodata._id}
            biodata={biodata}
          ></BiodataInfoCard>
        ))}
      </Container>
    </div>
  );
};

export default BiodataInfo;
