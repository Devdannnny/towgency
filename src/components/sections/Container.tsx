import { TChildren } from "@devdanny/types/shared";
import React from "react";

const Container = ({ children, classNames }: TChildren) => {
  return (
    <section className={`tow-container ${classNames}`}>{children}</section>
  );
};

export default Container;
