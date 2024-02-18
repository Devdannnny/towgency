"use client";

import { HeaderItem } from "@devdanny/lib/data";
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

const ListItem = ({ title, isActive, url, hasDropdown, sub }: ListItemFunc) => {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(sub);
  return (
    <li className="self-center cursor-pointer mr-1 txtHover rounded-[30px]">
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
    <nav className="h-[64px]  py-3 text-base flex leading-6 z-[2002] absolute w-full">
      <div className="tow-container">
        <div className="flex flex-row items-center">
          <Link
            href="/"
            className={`${towFonts.className} text-2xl font-semibold text-white`}
          >
            TowGency
          </Link>
        </div>
        <ul className="flex flex-1 mx-6 overflow-hidden visible">
          {HeaderItem.map((item) => (
            <ListItem
              key={item?.id}
              title={item?.title}
              url={item?.url}
              isActive={false}
              hasDropdown={item?.hasSub}
              sub={item?.sub}
            />
          ))}
        </ul>
        <ul className="flex justify-end space-x-4 m-0 ">
          <ListItem
            title={"Support"}
            url={"/"}
            isActive={false}
            hasDropdown={false}
            sub={[]}
          />
          <Button className="rounded-[30px] bg-tow-secondary h-auto text-tow-primary text-base">
            Sign up
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
