import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "5740717767acb4b3f";

function useGoogleSearch(term, startIndex, isImageSearch ) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}${isImageSearch ? "&searchType=image" : ""}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error occurred while fetching data:", error);
      })
    };

    fetchData();
  }, [term, startIndex, isImageSearch]);

  return { data };
}

export default useGoogleSearch;