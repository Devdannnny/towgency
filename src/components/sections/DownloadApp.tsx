"use client";

import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs } from "@nextui-org/react";

const DownloadApp = () => {
  return (
    <>
      <Container classNames=" pt-[48px] pb-[48px] md:min-h-screen noMarg">
        <div className="w-full h-full py-12 md:py-[80px] px-5 md:px-12 bg-tow-primary md:rounded-[24px]">
          <div className="flex items-center justify-center pb-14">
            <Tabs
              classNames={{
                tabList:
                  "bg-transparent rounded-xl border-none shadow-none md:min-w-[400px]",
                tabContent:
                  "font-medium text-[20px] rounded-[24px] border-none shadow-none",
                tab: "tow-tab h-[60px] rounded-[24px]",
                panel: "rounded-xl",
              }}
              key={"2"}
              size={"md"}
              aria-label="Tabs sizes"
            >
              <Tab className="rounded-xl" key="motorist" title="Motorist" />
              <Tab
                className="rounded-xl"
                key="sproviders"
                title="Service Providers"
              />
            </Tabs>
          </div>
          <div className="flex w-full mt-3 flex-col md:flex-row gap-[48px] ">
            <div
              className=" w-full"
              style={{
                inlineSize: "100%",
                maxInlineSize: "512px",
              }}
            >
              <div>
                <div
                  className="flex flex-row mob-center space-x-2 justify-start items-center whitespace-nowrap"
                  style={{
                    gridAutoRows: "auto",
                  }}
                >
                  <p className="text-[15px] font-medium text-tow-secondary">
                    Available on
                  </p>
                  <div className="flex flex-row space-x-2 items-center text-tow-secondary">
                    <span className="inline-flex w-6 h-6" aria-hidden="true">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.026 8.163c-.094.058-2.318 1.293-2.318 4.03.105 3.121 2.807 4.216 2.853 4.216-.046.058-.408 1.491-1.479 2.993C18.232 20.696 17.29 22 15.856 22c-1.363 0-1.852-.862-3.425-.862-1.688 0-2.166.862-3.459.862-1.433 0-2.446-1.374-3.343-2.656-1.164-1.677-2.154-4.31-2.189-6.837-.023-1.339.233-2.655.885-3.774.92-1.56 2.562-2.62 4.356-2.655 1.374-.047 2.597.943 3.436.943.804 0 2.306-.943 4.006-.943.734 0 2.691.221 3.903 2.085ZM12 5.81c-.245-1.223.43-2.446 1.06-3.226C13.864 1.64 15.133 1 16.227 1a4.56 4.56 0 0 1-1.164 3.296C14.354 5.24 13.13 5.95 12 5.81Z" />
                      </svg>
                    </span>
                    <span className="inline-flex w-6 h-6" aria-hidden="true">
                      <svg
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.003 2.4C6.7 2.4 2.4 6.698 2.4 12s4.3 9.6 9.603 9.6c8.008 0 9.812-7.434 9.061-11.2H12v3.2h6.19A6.398 6.398 0 0 1 12 18.4a6.4 6.4 0 0 1 0-12.8c1.607 0 3.071.597 4.195 1.575l2.274-2.272A9.568 9.568 0 0 0 12.003 2.4Z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <h2 className="mb-6 font-bold mob-center text-tow-secondary text-[40px] md:text-[70px] mt-5 md:mt-12 leading-[1.1] md:leading-[1]">
                Download the TowGency app
              </h2>
              <p className=" text-[19px] md:text-[24px] mob-center text-tow-secondary font-normal mb-6">
                Hit the road again with the TowGency app! No problem is too big
                for us to handle.
              </p>
              <div className="mob-center">
                <Link
                  href="/"
                  className="relative p-5 overflow-hidden rounded-lg inline-block"
                  style={{
                    blockSize: "148px",
                    inlineSize: "148px",
                    border: "1px solid #fff5ea",
                  }}
                >
                  <Image
                    src={"/assets/images/bg/tow-qrcode.png"}
                    alt=""
                    fill
                    objectFit="cover"
                  />
                </Link>
              </div>
            </div>
            <div
              className="flex-grow"
              style={{
                inlineSize: "100%",
              }}
            >
              <div className="flex gap-[30px] items-center justify-center md:justify-end ">
                <div className="overflow-hidden relative hidden md:block rounded-6 w-[80%] md:w-[216px] md:h-[469px] ">
                  <Image
                    src="/assets/images/mockup/phone-1.webp"
                    alt=""
                    fill
                    className="block w-full h-full "
                    style={{
                      aspectRatio: "260/563",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="overflow-hidden rounded-[24px] relative block rounded-6 h-[500px] md:w-[175px] md:h-[374px] ">
                  <video
                    preload="auto"
                    className="border-[2px] overflow-hidden border-solid h-full rounded-[24px]"
                    style={{
                      borderColor: "#362726",
                      objectFit: "contain",
                    }}
                    loop
                    muted
                    playsInline
                    autoPlay
                  >
                    <source
                      src="//www.fresha.com/assets/static/media/mobileAppVideo.0d40f11f.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default DownloadApp;
