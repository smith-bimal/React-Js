import { useEffect, useState } from "react";

const useFetchAPI = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [url]);

  return data;
};

export default useFetchAPI;
