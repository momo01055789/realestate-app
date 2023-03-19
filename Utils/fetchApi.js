import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
// Headers

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "b79122b34fmshdb8d3246fbb5248p15f9ddjsn3eee3e47c518",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
