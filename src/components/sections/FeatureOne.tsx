import { FeatureFunc } from "@devdanny/types/section";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const FeatureOne = ({ title, FeatList, bgImag, url }: FeatureFunc) => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-x-28 md:items-center">
        <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]">
          <div
            className="w-full overflow-hidden relative h-[700px] rounded-2xl"
            style={{
              background: "#553a1b",
            }}
          >
            <Image
              src={bgImag}
              alt=""
              fill
              className="opacity-85"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative overflow-hidden w-full h-auto md:max-w-[560px]"></div>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col">
              <div
                className="flex flex-col pr-12 w-full gap-y-6"
                id="lead-item-container-text"
              >
                <h4 className="font-semibold text-tow-primary mt-0 text-2xl md:text-4xl mb-0">
                  {title}
                </h4>
              </div>
            </div>
            <ol className="[counter-reset:ordered-list-counter] pr-12 my-0 pl-0 mt-0 mb-0">
              {FeatList.map((item) => (
                <li
                  key={item?.id}
                  className="flex last:mb-0 mb-8 flex-row [counter-increment:ordered-list-counter] before:content-[counter(ordered-list-counter)] before:shrink-0 before:font-semibold before:bg-action-secondary before:text-tow-primary before:flex before:items-center before:justify-center before:rounded-full before:bg-clip-content before:p-0.5 before:mr-4 before:w-6 before:h-6 before:text-xs"
                >
                  <div className="flex flex-col">
                    <h5 className="font-semibold text-tow-primary mt-0 text-base md:text-lg mb-2">
                      {item?.title}
                    </h5>
                    <div className="mt-0 text-base leading-6 font-normal mb-0 text-secondary">
                      {item?.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
              <Button
                color={"default"}
                variant={"flat"}
                className={`text-tow-secondary bg-tow-primary font-medium py-6 px-9 rounded-[30px] text-base`}
                style={
                  {
                    //   backgroundColor: "#178d72",
                  }
                }
              >
                Get the app
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureOne;
