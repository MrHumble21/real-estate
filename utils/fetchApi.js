import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "39d4db584bmshe48255d07f645e9p114acajsnf4c6801119af",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data
};
