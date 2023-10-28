import Container from "../Shared/Container";
import { FcEditImage } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import flower from "../../assets/images/flower.png";

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
            <div className="border rounded-xl p-5 flex gap-4 flex-col items-center justify-center">
              <FcEditImage size="45" />
              <p className="pink font-bold">+Create Your Biodata</p>
            </div>
            <div className="border rounded-xl p-5 flex gap-4 flex-col items-center justify-center">
              <FaYoutube color="red" size="45" />
              <p className="pink font-bold">+Create Your Biodata</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateBio;
