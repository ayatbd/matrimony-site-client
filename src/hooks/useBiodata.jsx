import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
const useBiodata = () => {
  const { loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: biodatas = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["biodata"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure("/biodata");
      return res.data;
    },
  });
  return [biodatas, refetch, isLoading];
};

export default useBiodata;
