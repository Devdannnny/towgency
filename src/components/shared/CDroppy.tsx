"use client";

import React from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";

const CDroppy = () => {
  const countries = [
    {
      id: 0,
      code: "+233",
      name: "Ghana",
      avatar: "gh.svg",
    },
  ];
  return (
    <div>
      <Select
        aria-label="towGency"
        aria-labelledby="towGency"
        items={countries}
        label=""
        variant="flat"
        defaultSelectedKeys="0"
        classNames={{
          label: "group-data-[filled=true]:-translate-y-5 ",
          trigger: "h-[58px] rounded-[8px] bg-[#f4f4f6]",
          listboxWrapper: "max-h-[400px]",
          mainWrapper: "h-[58px] rounded-[8px] bg-[#f4f4f6]",
          innerWrapper: "min-h-[unset]",
          selectorIcon: "w-5 h-5 text-black",
          value: "text-md",
        }}
        listboxProps={{
          itemClasses: {
            base: [
              "rounded-md",
              // "text-default-500",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          },
        }}
        popoverProps={{
          classNames: {
            base: "before:bg-default-200",
            content: "p-0 border-small border-divider bg-background",
          },
        }}
        renderValue={(items) => {
          return items.map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <Avatar
                alt={item.data?.name}
                className="flex-shrink-0"
                size="sm"
                style={{
                  width: 24,
                  height: 24,
                }}
                src={`https://hatscripts.github.io/circle-flags/flags/${item.data?.avatar}`}
              />
              <div className="flex flex-col">
                <span>{item.data?.code}</span>
              </div>
            </div>
          ));
        }}
      >
        {(user) => (
          <SelectItem
            key={user.id}
            textValue={user.name}
            aria-label="towGency"
            aria-labelledby="towGency"
          >
            <div className="flex gap-2 items-center">
              <Avatar
                alt={user.name}
                className="flex-shrink-0"
                size="sm"
                src={`https://hatscripts.github.io/circle-flags/flags/${user?.avatar}`}
              />
              <div className="flex flex-col">
                <span className="text-small">{user.name}</span>
                <span className="text-tiny text-default-400">{user.name}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

export default CDroppy;
