import { useState, useEffect } from "react";
import useBiodata from "./useBiodata";

const useMale = () => {
  const [isMale, setIsMale] = useState(false);

  // Fetch data from API using react-query
  const [biodatas, , isLoading] = useBiodata();

  // Check if the data is available and determine if it's male
  useEffect(() => {
    if (!isLoading && biodatas) {
      const maleAvatars = biodatas.filter(
        (gender) => gender.biodata_type === "Male"
      );
      setIsMale(maleAvatars.length > 0);
    }
  }, [biodatas, isLoading]);

  return isMale;
};
export default useMale;
