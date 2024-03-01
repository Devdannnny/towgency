"use client";

import { towFonts } from "@devdanny/lib/fonts";
import { ListItemFunc } from "@devdanny/types/shared";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import Signup from "../Widget/SignupModal";
import { HeaderItem } from "@devdanny/lib/data";

const ListItem = ({
  title,
  isActive,
  url,
  hasDropdown,
  sub,
  className,
}: ListItemFunc) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(sub);
  return (
    <li
      className={`self-center cursor-pointer mr-1 txtHover rounded-[30px] ${className}`}
    >
      {!hasDropdown ? (
        <Link
          href={url}
          className={`inline-flex flex-row items-center justify-center ${
            isActive ? "text-white" : "text-tow-secondary "
          } font-normal leading-4 text-base rounded-[30px] px-3 py-[10px] whitespace-nowrap`}
        >
          {title}
        </Link>
      ) : (
        <>
          <Dropdown
            placement="bottom-start"
            onOpenChange={(nut) => setIsOpen(nut)}
            className="rounded-lg border-none p-6 py-8 pt-2"
            classNames={{
              base: "p-0 border-none",
              content: "p-0 border-none p-3",
            }}
            offset={13}
          >
            <DropdownTrigger>
              <Button
                color={"default"}
                variant={"flat"}
                className={`capitalize txtHover rounded-[30px] text-base`}
                style={{
                  backgroundColor: "transparent",
                }}
                endContent={
                  <>
                    <div className="text-[14px] font-medium ">
                      {isOpen ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path
                            d="M18 11.7v3.8l-6-4.6-6 4.6v-3.8l6-4.6 6 4.6Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path
                            d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      )}
                    </div>
                  </>
                }
              >
                {title}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Dropdown Variants"
              color={"default"}
              variant={"flat"}
              className="border-none"
            >
              {sub.map((itemSub) => (
                <DropdownItem
                  className="text-tow-primary py-3 cursor-pointer text-base"
                  key={itemSub?.id}
                >
                  {itemSub?.title}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </>
      )}
    </li>
  );
};

const Header = () => {
  return (
    <nav className="h-[64px] py-3 text-base flex leading-6 z-[30] fixed md:absolute w-full">
      <div className="tow-container">
        <div className="flex flex-row items-center">
          <Link
            href="/"
            className={`${towFonts.className} text-2xl font-semibold text-white`}
          >
            TowGency
          </Link>
        </div>
        <ul className="hidden md:flex w-full mx-6 overflow-hidden visible">
          {HeaderItem.map((item) => (
            <ListItem
              key={item?.id}
              title={item?.title}
              url={item?.url}
              isActive={false}
              hasDropdown={item?.hasSub}
              sub={item?.sub}
              className="tow-hide-tab"
            />
          ))}
        </ul>
        <ul className="w-full flex justify-end space-x-4 m-0 ">
          <ListItem
            title={"Support"}
            url={"/"}
            isActive={false}
            hasDropdown={false}
            sub={[]}
            className="tow-hidden-mb"
          />
          <li className="flex items-center tow-hidden justify-center">
            <Signup />
          </li>
          <li className="tow-show-mob flex flex-row items-center justify-end min-w-12 ">
            <Button
              className="p-[10px] leading-4 text-tow-secondary rounded-full transition-all duration-[.3s] bg-[rgba(255,255,255,.1)] hover:bg-[rgba(255,255,255,.4)]"
              style={{
                // background: "transparent",
                width: "auto",
                height: "auto",
                minWidth: "unset",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                color="currentColor"
              >
                <path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,
                <path d="M2 15h20v3H2v-3Z" fill="currentColor"></path>
              </svg>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
