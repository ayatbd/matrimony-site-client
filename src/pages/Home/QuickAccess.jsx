import Container from "../Shared/Container";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { BsTelephoneForward } from "react-icons/bs";
import { FaGenderless } from "react-icons/fa";

const QuickAccess = () => {
  return (
    <div className="bg-[#530E29] ">
      <Container>
        <div className="h-[100vh]  flex flex-col items-center justify-center">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <p className="text-[#D02D77]">Quick Access</p>
              <h2 className="text-4xl text-white font-bold">
                How WeddingWonders Works
              </h2>
            </div>
            <div className="flex gap-5">
              <div className="py-10 flex flex-col items-center px-3 space-y-3 rounded-lg bg-white">
                <AiOutlineUserAdd size="36" className="text-[#9D2D7D]" />
                <p className="text-xl text-center">Create Biodata</p>
                <p className="text-center">
                  You can easily create a biodata on WeddingWonders completely
                  free of cost with some steps
                </p>
              </div>
              <div className="py-10 flex flex-col items-center px-3 space-y-3 rounded-lg bg-white">
                <BiSearchAlt size="36" className="text-[#9D2D7D]" />
                <p className="text-xl text-center">Search Biodata</p>
                <p className="text-center">
                  You can easily create a biodata on WeddingWonders completely
                  free of cost with some steps
                </p>
              </div>
              <div className="py-10 flex flex-col items-center px-3 space-y-3 rounded-lg bg-white">
                <BsTelephoneForward size="36" className="text-[#9D2D7D]" />
                <p className="text-xl text-center">Contact with gurdians</p>
                <p className="text-center">
                  You can easily create a biodata on WeddingWonders completely
                  free of cost with some steps
                </p>
              </div>
              <div className="py-10 flex flex-col items-center px-3 space-y-3 rounded-lg bg-white">
                <FaGenderless size="36" className="text-[#9D2D7D]" />
                <p className="text-xl text-center">Get Married</p>
                <p className="text-center">
                  You can easily create a biodata on WeddingWonders completely
                  free of cost with some steps
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QuickAccess;
