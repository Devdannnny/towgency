import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const Service = () => {
  const ServeItem = [
    {
      id: 0,
      title: "Towing",
      desc: "Local towing services are one click away",
      img: "/assets/images/services/tow.png",
    },
    {
      id: 1,
      title: "Roadside Assistance",
      desc: "TowGency can help you get back on the road",
      img: "/assets/images/services/tow.png",
    },
    {
      id: 2,
      title: "Flat Tire",
      desc: "Flat Tire Change Services in the palm of your hand",
      img: "/assets/images/services/tow.png",
    },
    {
      id: 3,
      title: "Jump Start",
      desc: "Battery dead and need a quick jump?",
      img: "/assets/images/services/tow.png",
    },
    {
      id: 4,
      title: "Locked Out",
      desc: "Locked Out? Keys inside vehicle?",
      img: "/assets/images/services/tow.png",
    },
    {
      id: 5,
      title: "Out of Fuel",
      desc: "Out of Gas? Accidentally run out of fuel?",
      img: "/assets/images/services/tow.png",
    },
  ];
  return (
    <>
      <Container classNames="py-[48px] min-h-auto">
        <div className="w-full">
          <div>
            <h2 className="font-semibold text-tow-primary mt-0 text-4xl md:text-6xl mb-6 md:text-center md:mb-12">
              Our services
            </h2>
          </div>
          <div className="grid gap-2 md:gap-7 grid-cols-2 md:grid-cols-3">
            {ServeItem.map((item) => (
              <Button
                role="button"
                aria-disabled="false"
                key={item.id}
                tabIndex={0}
                className="overflow-hidden relative p-4 md:p-6 text-left rounded md:rounded-lg bg-neutral-secondary min-h-[180px] duration-200 hover:scale-[1.02] select-none z-50 w-full h-full inline-block cursor-pointer active:scale-975 active:ease-in-out active:duration-100"
                data-hp-menu="services"
                data-hp-target="rides"
              >
                <div className="relative z-10 w-full h-full">
                  <div
                    className="pb-14 md:pb-0 md:pr-26"
                    data-hp-menu="services"
                    data-hp-target="rides"
                  >
                    <h5
                      className="font-semibold mt-0 text-lg md:text-2xl mb-2"
                      data-hp-menu="services"
                      data-hp-target="rides"
                    >
                      {item.title}
                    </h5>
                    <span
                      className="inline-block mt-0 text-wrap text-base leading-6 font-normal mb-0 text-secondary max-md:!text-sm"
                      data-hp-menu="services"
                      data-hp-target="rides"
                    >
                      {item.desc}
                    </span>
                  </div>
                </div>
                <Image
                  src={item.img}
                  alt=""
                  width={130}
                  height={72}
                  className="absolute right-0 bottom-0 z-0 max-h-[130px]  !max-w-[85px] md:!max-h-[130px] md:!max-w-[130px]"
                />
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Service;
