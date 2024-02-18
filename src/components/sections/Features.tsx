"use client";

import React from "react";
import Container from "./Container";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import FeatureOne from "./FeatureOne";

const Features = () => {
  const [selected, setSelected] = React.useState<any>("motorist");
  return (
    <Container classNames="py-[48px]">
      <div className="flex w-full flex-col">
        <Tabs
          radius="full"
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          classNames={{
            tabList: "bg-transparent border-none shadow-none min-w-[400px]",
            tabContent: "font-medium text-[20px] border-none shadow-none",
            tab: "tow-tab h-[60px]",
          }}
        >
          <Tab key="motorist" title="Motorist">
            <div className="py-8">
              <FeatureOne
                title="Stuck on the side of the road? Get help quickly"
                bgImag="/assets/images/bg/tow-bg-3.webp"
                url="/"
                FeatList={[
                  {
                    id: 0,
                    title: "No membership fees, Affordable prices.",
                    desc: `No membership card or fees necessary. Pay for the services you need, with prices varying based on your selection.`,
                  },
                  {
                    id: 1,
                    title: "Haggle free, No cash required",
                    desc: `Yes, we offer upfront pricing. It's easy, you'll know the cost for all services before you buy. No need to talk price with the driver or get hit with any hidden fees.`,
                  },
                  {
                    id: 2,
                    title: "Professional service providers ready to deliver",
                    desc: `With roadside professionals all over Ghana, there will always be one nearby to support.`,
                  },
                ]}
              />
            </div>
          </Tab>
          <Tab key="sproviders" title="Service Providers">
            <div className="py-8">
              <FeatureOne
                title="We know that towing and roadside Service Providers are the backbone of Ghana's roads"
                bgImag="/assets/images/bg/tow-bg-4.jpeg"
                url="/"
                FeatList={[
                  {
                    id: 0,
                    title: "More jobs near you",
                    desc: `Choose TowGency, the leading tech provider, for the digital tools that drive business growth and help you connect with nearby stranded motorists efficiently.`,
                  },
                  {
                    id: 1,
                    title: "Get paid instantly",
                    desc: `Get instant, detailed job alerts through the TowGency Partner App, complete the job, and receive payment within minutes instead of waiting for days or weeks.`,
                  },
                  {
                    id: 2,
                    title: "No cost, no risk to join",
                    desc: `Join the TowGency network as an independent service provider for free. Get started quickly and sign up today to start earning more money.`,
                  },
                ]}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
};

export default Features;
