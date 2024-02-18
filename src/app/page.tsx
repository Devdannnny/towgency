import Banner from "@devdanny/components/Widget/Banner";
import { SDownload, SFeatures, SService } from "@devdanny/components/sections";
import Container from "@devdanny/components/sections/Container";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Banner type={2} />
      <Container classNames="py-[48px]">
        <div className="w-[70%]">
          <h3 className="text-[50px] pr-[10%] text-tow-primary leading-[55px] font-bold">
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
