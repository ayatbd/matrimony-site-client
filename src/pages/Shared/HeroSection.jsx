import Container from "./Container";

const HeroSection = () => {
  return (
    <div className="navHero-bg w-full h-[90vh]">
      <Container>
        <div className="flex flex-col gap-14 items-start pt-28">
          <h1 className="text-4xl text-white font-bold">
            Bangladeshi Muslim <br /> <span className="pink">Matrimony</span>
          </h1>
          <p className="text-white">
            When a person gets married he has completed half of his <br /> deen,
            so let him fear Allah with regard to the other half.
          </p>
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-12">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
