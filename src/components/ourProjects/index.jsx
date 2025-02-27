import React from "react";
import VerticalTimelineContainer from "./VerticalTimeline";
import PageGradientBg from "../common/PageGradientBg";

export default function OurProjectsMain() {
  return (
    <section className="pageSection pb-16 md:pb-24">
      <PageGradientBg />
      <VerticalTimelineContainer />
    </section>
  );
}
