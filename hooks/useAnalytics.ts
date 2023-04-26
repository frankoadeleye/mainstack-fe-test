import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { SupplementaryData } from "utils/data/report-card";

function UseAnalytics() {
  const [topRefSource, setTopRefSource] = useState([]);
  const [topLocations, setTopLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const GetUserData = () => {
    const userDataCall = useCallback(async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`, {
          headers: {},
        });
        setIsLoading(false);
        setTopLocations(response.data.top_locations);
        setTopRefSource(response.data.top_sources);
      } catch (error) {
        setIsLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { userDataCall };
  };

  const { userDataCall } = GetUserData();

  useEffect(() => {
    userDataCall();
  }, [userDataCall]);

  useEffect(() => {
    if (!isLoading && topLocations.length > 0) {
      console.log("here is the response", topLocations);
      for (let i = 0; i < SupplementaryData.length; i++) {
        topLocations.forEach((element) => {
          if (SupplementaryData[i].name === element.country) {
            element.icon = String(SupplementaryData[i].icon.src);
          }
        });
      }
    }
  }, [isLoading, topLocations]);

  return {
    topLocations,
    topRefSource,
    isLoading,
  };
}

export default UseAnalytics;
