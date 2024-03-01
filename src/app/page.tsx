import Banner from "@devdanny/components/Widget/Banner";
import { SDownload, SFeatures, SService } from "@devdanny/components/sections";
import Container from "@devdanny/components/sections/Container";

const LandingPage = () => {
  return (
    <>
      <Banner type={2} />
      <Container classNames="py-[48px]">
        <div className="md:w-[70%]">
          <h3 className="text-2xl leading-7 md:text-[50px] md:pr-[10%] text-tow-primary md:leading-[55px] font-bold">
            Towing and roadside assistance. Whatever it may be.
          </h3>
        </div>
      </Container>
      <SFeatures />
      <SService />
      <SDownload />
    </>
  );
};

export default LandingPage;
