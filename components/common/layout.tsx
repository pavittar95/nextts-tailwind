import React from "react";
import { HeaderProps } from "../../types/header";
import Header from "../header";
import Meta from "./meta";

export default function Layout({ children }: HeaderProps) {
  return (
    <>
      <Header />
      <Meta
        pageMeta={{
          title: "/index",
          description: "Hello",
        }}
      />
      {children}
    </>
  );
}
