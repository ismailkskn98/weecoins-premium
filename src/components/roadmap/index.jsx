import React from "react";
import VerticalTimelineContainer from "./VerticalTimeline";
import AboutGradientBg from "../about/AboutGradientBg";

export default function RoadMapMain() {
  return (
    <section className="fluid gridContainer relative flex gap-y-16 pb-16 pt-16 transition-colors duration-300 md:pb-24 md:pt-24">
      <AboutGradientBg />
      <VerticalTimelineContainer />
    </section>
  );
}
