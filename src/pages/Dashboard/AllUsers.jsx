import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Shared/Loader";
import Container from "../Shared/Container";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    isPending,
    error,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });
  if (isPending) return <Loader></Loader>;
  if (error) return "An error has occurred: " + error.message;

  // make admin
  const handleAdminMaking = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The user is Admin Now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // const handleAdminMaking = async (user) => {
  //   try {
  //     const response = await axiosSecure.patch(`/users/admin/${user._id}`);
  //     const data = response.data;

  //     if (data.modifiedCount) {
  //       refetch();
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "The user is Admin Now!",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   } catch (error) {
  //     // Handle error here
  //     console.error("Error making user admin:", error);
  //     // Display an error message to the user
  //     Swal.fire({
  //       icon: "error",
  //       title: "Error",
  //       text: "Failed to make the user admin.",
  //     });
  //   }
  // };

  return (
    <div>
      <Container>
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Users</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Role</th>
                </tr>
                {users.map((user) => (
                  <tr
                    key={user.email}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5">{user.name}</td>
                    <td className="p-3 px-5">{user.email}</td>
                    <td className="p-3 px-5">
                      <div className="text-start space-y-1">
                        {user.role === "admin" ? (
                          <button className="px-5 text-sm py-2 btn-disabled mr-2 rounded-full">
                            Admin
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAdminMaking(user)}
                            className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                          >
                            Make Admin
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllUsers;
