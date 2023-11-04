import fetch from "node-fetch";

const jsonTypicode = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=3e212be0b8784ccda85d3d4efce97c00";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);