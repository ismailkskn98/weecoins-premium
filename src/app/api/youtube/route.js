import { NextResponse } from "next/server";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UCMdhtrNApntO9QsobuoB6TA";

async function fetchVideos(videoDuration) {
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=50&videoDuration=${videoDuration}`;

  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  return data.items || [];
}

export async function GET() {
  try {
    const mediumVideos = await fetchVideos("medium");
    const longVideos = await fetchVideos("long");

    const allVideos = [...mediumVideos, ...longVideos];

    return NextResponse.json({ videos: allVideos });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch data", status: false }, { status: 500 });
  }
}
