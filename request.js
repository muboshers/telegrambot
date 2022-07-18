import axios from "axios";
import { requestOption } from "./options.js";

export async function tiktokDownloader(downloadUrl) {
  try {
    const options = {
      method: "GET",
      url: "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index",
      params: {
        url: downloadUrl,
      },
      headers: {
        "X-RapidAPI-Key": "b7b62f8074msh554642575a02280p1c4957jsned01377d5a0a",
        "X-RapidAPI-Host":
          "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com",
      },
    };
    const videoItem = await axios.request(options);
    const video = videoItem.data.video[0];
    return video;
  } catch (error) {
    return error.message;
  }
}

export async function instagramVideoDownloader() {
  try {
    const options = {
      method: "GET",
      url: "https://instagram-media-downloader.p.rapidapi.com/rapid/post.php",
      params: {
        url: "https://www.instagram.com/tv/CfG2jt0KQWN/?utm_source=ig_web_button_share_sheet",
      },
      headers: {
        "X-RapidAPI-Key": "b7b62f8074msh554642575a02280p1c4957jsned01377d5a0a",
        "X-RapidAPI-Host": "instagram-media-downloader.p.rapidapi.com",
      },
    };

    const videoItem = await axios.request(options);
    const videoLink = videoItem.data.video;
    return videoLink;
  } catch (error) {
    console.log(error.message);
  }
}

export async function youTubeDownloader(id) {
  try {
    const options = {
      method: "GET",
      url: "https://youtube-media-downloader.p.rapidapi.com/v2/video/details",
      params: {
        videoId: id,
        videos: "true",
        audios: "true",
        subtitles: "false",
        related: "false",
      },
      headers: {
        "X-RapidAPI-Key": "b7b62f8074msh554642575a02280p1c4957jsned01377d5a0a",
        "X-RapidAPI-Host": "youtube-media-downloader.p.rapidapi.com",
      },
    };

    const youTubeVideos = await axios.request(options);
    const videoUrl = youTubeVideos.data.videos.items[5].url;
    return videoUrl;
  } catch (error) {
    console.log(error.message);
  }
}
