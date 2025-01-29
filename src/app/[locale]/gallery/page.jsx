import PageTitle from "@/components/common/PageTitle";
import GalleryMain from "@/components/gallery";
import React from "react";

export default function Gallery() {
  return (
    <>
      <PageTitle title={"Gallery"} subtitle={"Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptas?"} />
      <GalleryMain />
    </>
  );
}
