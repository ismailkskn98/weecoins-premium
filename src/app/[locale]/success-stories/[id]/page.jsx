import SuccessStoryPage from "@/components/home/successStories/SuccessStoryPage";
import React from "react";
import { customMetaData } from "@/components/MetaData";
import { notFound } from "next/navigation";

export const metadata = { ...customMetaData, title: "Weecoins Premium | Success Stories" };

const getSuccessStoryById = async (id) => {
  try {
    const response = await fetch("https://backoffice.weecoins.org/getWcpStories", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        whoiam: "Wee.Coins!Premium2030",
      }).toString(),
    });
    if (!response.ok) {
      throw new Error(`API Hatası: ${response.status}`);
    }
    const data = await response.json(); // {status: true, data: []}
    if (!data.status) {
      throw notFound();
    }
    const successStory = data.data.find((item) => Number(item.id) === Number(id));
    // console.log(successStory);
    if (!successStory) {
      throw notFound();
    }

    return successStory;
  } catch (error) {
    console.log(error);
    throw notFound();
  }
};

export default async function SuccessStorie({ params }) {
  const { id } = await params;
  const successStory = await getSuccessStoryById(id);

  return <SuccessStoryPage successStory={successStory} />;
}
