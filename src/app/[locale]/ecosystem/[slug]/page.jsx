import React from "react";

export default async function page({ params }) {
  const slug = (await params).slug;
  console.log(slug);
  return <div>page</div>;
}
