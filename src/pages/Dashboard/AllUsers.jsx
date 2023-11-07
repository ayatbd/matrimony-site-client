import Swal from "sweetalert2";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log("error", err));
  }, []);

  // const { data: users = [], refetch } = useQuery(["users"], async () => {
  //   const res = await axiosSecure("/users");
  //   if (!res.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   return res.data;
  // });
  // console.log(users);

  // make admin

  const handleAdminMaking = (user) => {
    console.log(user);
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // refetch();
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
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>Red</td>
                <td>
                  <div className="text-center space-y-1">
                    {user.role === "admin" ? (
                      <button className="px-5 py-2 btn-disabled mr-2 rounded-full">
                        Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAdminMaking(user)}
                        className="px-5 py-2 rounded-full btn-error transition delay-50 hover:bg-blue-500 p-2"
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
  );
};

export default AllUsers;
