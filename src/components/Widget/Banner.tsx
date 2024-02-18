import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Banner = ({ type }: { type: number }) => {
  return (
    <>
      {type == 1 && (
        <div
          className="bg-tow-primary pt-[64px] relative flex grow items-end md:items-center"
          style={{
            height: "calc(80vh - 64px)",
          }}
        >
          <div className="tow-container flex px-6 h-full items-center">
            <div className="mb-0 md:w-8/12 flex flex-col py-10">
              <h1 className="font-semibold text-tow-secondary text-5xl md:text-7xl  md:mb-8 mb-6 mt-0">
                Roadside Assistance, Simplified
              </h1>
              <p className="mt-0 text-lg md:text-xl mr-6 text-tow-secondary pr-12 leading-[1.625rem] md:leading-7 font-normal mb-6 md:mb-8">
                Stuck on the side of the road? Get help quickly - simply tap
                your phone! Click a button on the TowGency app to get connected
                with a nearby towing company, across Ghana.
              </p>
              <div>
                <Button
                  color={"default"}
                  variant={"flat"}
                  className={`capitalize text-tow-primary py-6 px-9 rounded-[30px] text-base`}
                  style={{
                    backgroundColor: "#fff",
                  }}
                >
                  Get the app
                </Button>
              </div>
            </div>
            <div className="absolute right-0 h-full tow-vector bg-slate-100 opacity-10">
              <div></div>
            </div>
          </div>
        </div>
      )}
      {type == 2 && (
        <>
          <section className="">
            <div className="flex w-full min-h-[680px] py-[120px] md:py-10 bg-neutral-primary relative text-white">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/assets/images/bg/tow-bg-2.jpeg"
                  className="opacity-100"
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* <div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(35,9,1,1)] to-[rgba(0,0,0,0)]"></div> */}
              <div className="w-full h-full absolute inset-0 bg-gradient-to-t md:bg-gradient-to-br from-[rgba(0,0,0,.98)] to-[rgba(0,0,0,0)]"></div>
              <div className="tow-container z-30 flex px-6  items-center">
                <div className="mb-0 md:w-8/12 flex flex-col py-10">
                  <h1 className="font-semibold text-tow-secondary text-5xl md:text-7xl  md:mb-8 mb-6 mt-0">
                    Roadside Assistance, Simplified
                  </h1>
                  <p className="mt-0 text-lg md:text-xl mr-6 text-tow-secondary pr-12 leading-[1.625rem] md:leading-7 font-normal mb-6 md:mb-8">
                    Experience the ease of roadside assistance with TowGency's
                    digital platform. With just a tap, drivers can request quick
                    and hassle-free help.
                  </p>
                  <div>
                    <Button
                      color={"default"}
                      variant={"flat"}
                      className={`text-tow-primary  font-medium py-6 px-9 rounded-[30px] text-base`}
                      style={{
                        backgroundColor: "#fff",
                      }}
                    >
                      Get the app
                    </Button>
                  </div>
                </div>
                {/* <div className="absolute right-0 h-full tow-vector bg-slate-100 opacity-10">
                  <div></div>
                </div> */}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Banner;
