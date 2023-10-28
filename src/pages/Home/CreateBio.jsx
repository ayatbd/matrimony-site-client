import Container from "../Shared/Container";
import { IoIosPaper } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

const CreateBio = () => {
  return (
    <div className="createBio-bg h-[100vh]">
      <Container>
        <div className="pt-20">
          <h1 className="text-4xl text-[#530E29] font-bold text-center">
            Create Biodata In <span className="pink">WeddingWonders</span>
            <br />
            Completely Free
          </h1>
          <div className="flex items-center justify-center">
            <div className="border rounded-xl p-5 flex gap-2 flex-col items-center justify-center">
              <IoIosPaper size="30" />
              <p>+Create Your Biodata</p>
            </div>
            <div>
              <FaYoutube />
              <p>+Create Your Biodata</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CreateBio;
