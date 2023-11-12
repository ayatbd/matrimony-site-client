import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsersQuery = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.data;
    },
  });

  return { users, refetch };
};

export default useUsersQuery;
