"use client";

import { TInput } from "@devdanny/types/shared";
import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const TowInput = ({
  type,
  label,
  placeholder,
  hasLabel = true,
  name,
  controlData,
  errors,
  ...others
}: TInput) => {
  // console.log(others);
  return (
    <div className="w-full">
      <Controller
        name={name}
        control={controlData}
        {...others}
        render={({ field }) => (
          <Input
            autoComplete="off"
            {...field}
            key={""}
            type={type}
            errorMessage={
              errors[name] && errors[name].type === "required"
                ? errors[name]?.message
                : ""
            }
            className="w-full"
            classNames={{
              label: "font-semibold top-[40%]",
              inputWrapper:
                "h-[58px] rounded-[8px] bg-[#f4f4f6] transition-all duration-[.3s] border-2 border-[rgba(255,255,255,0)] hover:border-gray-300",
              input: "text-base",
            }}
            label={hasLabel ? label : ""}
            labelPlacement={"outside"}
            placeholder={placeholder}
            description={""}
          />
        )}
      />
    </div>
  );
};

export default TowInput;
