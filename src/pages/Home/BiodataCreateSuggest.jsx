import Container from "../Shared/Container";
import { FcEditImage } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import flower from "../../assets/images/flower.png";
import { Link } from "react-router-dom";
import Dialog from "./Dialog";
import useAuth from "../../hooks/useAuth";
import useBiodata from "../../hooks/useBiodata";
import { useEffect, useState } from "react";

const BiodataCreateSuggest = () => {
  const { user } = useAuth();
  const [biodatas, , isLoading] = useBiodata();
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    if (user && !isLoading) {
      const isUserSubmitted = biodatas.some(
        (data) => data.userEmail === user.email
      );
      setSubmitted(isUserSubmitted);
    }
  }, [biodatas, isLoading, user]);

  return (
    <div className="createBio-bg md:h-[100vh] py-20">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#530E29] font-bold text-center">
            Create Biodata In <span className="pink">WeddingWonders</span>
            <br />
            Completely Free
          </h1>
          <img className="w-28 h-28" src={flower} alt="" />
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10">
            <button
              className="w-full"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              {!submitted ? (
                <Link to="/mybioform">
                  <span className="border bottom-shadow rounded-xl px-5 py-7 flex gap-4 flex-col items-center justify-center">
                    <FcEditImage size="45" />
                    <p className="pink font-bold">+ Create Your Biodata</p>
                  </span>
                </Link>
              ) : (
                <Link to="/biodatainfo">
                  <span className="border bottom-shadow rounded-xl px-5 py-7 flex gap-4 flex-col items-center justify-center">
                    <FcEditImage size="45" />
                    <p className="pink font-bold">+ See Your Biodata</p>
                  </span>
                </Link>
              )}
            </button>
            <Dialog my_modal_2="my_modal_2"></Dialog>
            <button className="w-full">
              <Link>
                <span className="border bottom-shadow rounded-xl px-5 py-7 flex gap-4 flex-col items-center justify-center">
                  <FaYoutube color="red" size="45" />
                  <p className="pink font-bold">+ How to Create Biodata</p>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BiodataCreateSuggest;
