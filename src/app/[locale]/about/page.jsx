import AboutMain from "@/components/about/AboutMain";
import PageTitle from "@/components/common/PageTitle";
import React from "react";

export default function About() {
  return (
    <>
      <PageTitle title={"About us"} subtitle={"Today we are inspiring story from the very beginning to our days"} />
      <AboutMain />
    </>
  );
}
