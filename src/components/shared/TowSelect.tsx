"use client";

import React, { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { ListDataFunc } from "@devdanny/types/shared";
import { Controller } from "react-hook-form";

const TowSelect = ({
  name,
  listData,
  placeholder,
  label,
  selectionMode,
  controlData,
  errors,
  ...others
}: ListDataFunc) => {
  return (
    <div>
      <Controller
        name={name}
        control={controlData}
        {...others}
        render={({ field }) => (
          <>
            <Select
              {...field}
              labelPlacement={"outside"}
              className=""
              label={label}
              selectionMode={selectionMode}
              errorMessage={
                errors[name] && errors[name].type === "required"
                  ? errors[name]?.message
                  : ""
              }
              aria-label="towGency"
              aria-labelledby="towGency"
              placeholder={placeholder}
              classNames={{
                label: "group-data-[filled=true]:-translate-y-5 ",
                trigger: "h-[58px] rounded-[8px] bg-[#f4f4f6]",
                listboxWrapper: "max-h-[400px]",
                mainWrapper: "h-[58px] rounded-[8px] bg-[#f4f4f6]",
                innerWrapper: "min-h-[unset]",
                selectorIcon: "w-5 h-5 text-black",
                value: "text-md",
                helperWrapper: "bg-[#f4f4f6] rounded-b-[10px] pb-2 pl-3",
              }}
              listboxProps={{
                itemClasses: {
                  base: [
                    "rounded-md",
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
            >
              {listData.map((item) => (
                <SelectItem
                  aria-label="towGency"
                  aria-labelledby="towGency"
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </SelectItem>
              ))}
            </Select>
          </>
        )}
      />
    </div>
  );
};

export default TowSelect;
