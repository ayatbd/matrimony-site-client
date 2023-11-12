import ScrollToTop from "react-scroll-to-top";
import Address from "./Address";
import EducationalInfo from "./EducationalInfo";
import FamilyInfo from "./FamilyInfo";
import PersonalInfo from "./PersonalInfo";
import ProfessionalInfo from "./ProfessionalInfo";
import MarriageRelatedInfo from "./MarriageRelatedInfo";
import ExpectedPartner from "./ExpectedPartner";
import GeneralInfo from "./GeneralInfo";
import "../../css/page.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MyBioForm = () => {
  const [loading, setLoading] = useState(false);
  const [biodataSubmitted, setBiodataSubmitted] = useState(false); // Added state to track submission status
  const [biodatas, setBiodatas] = useState([]);
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-unused-vars
    watch,
    // eslint-disable-next-line no-unused-vars
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch("http://localhost:5000/biodata")
      .then((res) => res.json())
      .then((data) => {
        setBiodatas(data);
        // Check if the user has already submitted biodata based on the response data
        const userHasSubmitted = data.some(
          (entry) => entry.email === user.email
        ); // Replace 1 with the actual user ID
        setBiodataSubmitted(userHasSubmitted);
      });
  }, []);

  const onSubmit = (data) => {
    if (biodataSubmitted) {
      // If the user has already submitted, display a message or prevent submission
      Swal.fire({
        title: "Already Submitted",
        text: "You've already submitted your biodata.",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      setLoading(true);
      console.log(data);
      const updatedData = { userEmail: user.email, ...data };
      fetch("http://localhost:5000/biodata", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setLoading(false);
            setBiodataSubmitted(true); // Update the submission status
            Swal.fire({
              title: "Success!",
              text: "Your biodata has been submitted successfully.",
              icon: "success",
              confirmButtonText: "Ok",
            });
            reset(); // Reset the form
          }
        });
    }
  };

  return (
    <div className="w-full">
      <div className="w-full">
        <ScrollToTop top="800" color="#fff" smooth />
        <form onSubmit={handleSubmit(onSubmit)}>
          <GeneralInfo register={register}></GeneralInfo>
          <FamilyInfo register={register}></FamilyInfo>
          <Address register={register}></Address>
          <PersonalInfo register={register}></PersonalInfo>
          <EducationalInfo register={register}></EducationalInfo>
          <ProfessionalInfo register={register}></ProfessionalInfo>
          <MarriageRelatedInfo register={register}></MarriageRelatedInfo>
          <ExpectedPartner register={register}></ExpectedPartner>
          <div className="text-center mt-10">
            <button
              className="px-5 py-2.5 relative rounded group font-medium text-white font-medium inline-block"
              disabled={biodataSubmitted}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">
                {loading ? "loading.." : "Button Text"}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyBioForm;
