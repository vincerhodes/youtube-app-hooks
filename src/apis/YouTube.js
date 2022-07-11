import axios from "axios";

// https://developers.google.com/youtube/v3/docs

const KEY = "AIzaSyDp0heq5Np_ddeR5mdhMmWLGFVkYF4Zfv8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
