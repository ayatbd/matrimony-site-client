import Container from "./Shared/Container";
import PageBanner from "./Shared/PageBanner";

const Contact = () => {
  return (
    <div>
      <PageBanner heading="Contact Us"></PageBanner>
      <Container>
        <div>
          <p className="text-center">
            For any query, please fill out the form bellow and set it to us.
            <br /> We'll contact you soon Insha-Allah
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
