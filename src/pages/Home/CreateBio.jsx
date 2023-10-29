import Container from "../Shared/Container";
import { FcEditImage } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import flower from "../../assets/images/flower.png";
import { Link } from "react-router-dom";

const CreateBio = () => {
  return (
    <div className="createBio-bg h-[100vh]">
      <Container>
        <div className="pt-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-[#530E29] font-bold text-center">
            Create Biodata In <span className="pink">WeddingWonders</span>
            <br />
            Completely Free
          </h1>
          <img className="w-28 h-28" src={flower} alt="" />
          <div className="flex items-center justify-center gap-10">
            <button>
              <Link>
                <span className="border bottom-shadow rounded-xl px-5 py-7 flex gap-4 flex-col items-center justify-center">
                  <FcEditImage size="45" />
                  <p className="pink font-bold">+ Create Your Biodata</p>
                </span>
              </Link>
            </button>
            <button>
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

export default CreateBio;
