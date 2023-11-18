import useBiodata from "../../hooks/useBiodata";
import Container from "../Shared/Container";
import Loader from "../Shared/Loader";
import Swal from "sweetalert2";

const AllBiodataTable = () => {
  const [biodatas, refetch, isLoading] = useBiodata();

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/class/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            console.log(res);
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your class has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleApprove = (biodata) => {
    console.log(biodata);
    if (biodata.status === "approved") {
      // If already approved, do nothing
      return;
    }
    fetch(`http://localhost:5000/biodata/approve/${biodata._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The user is Instructor Now!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Container>
        <div className="text-gray-900 bg-gray-200">
          <div className="p-4 flex">
            <h1 className="text-3xl">Biodata</h1>
          </div>
          <div className="px-3 py-4 flex justify-center">
            <table className="w-full text-md bg-white shadow-md rounded mb-4">
              <tbody>
                <tr className="border-b">
                  <th className="text-left p-3 px-5">Name</th>
                  <th className="text-left p-3 px-5">Email</th>
                  <th className="text-left p-3 px-5">Type Of Biodata</th>
                  <th className="text-center p-3 px-5">Type Of Biodata</th>
                </tr>
                {biodatas.map((biodata) => (
                  <tr
                    key={biodata._id}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5">{biodata.name}</td>
                    <td className="p-3 px-5">{biodata.userEmail}</td>
                    <td className="p-3 px-5">{biodata.biodata_type}</td>
                    <td className="p-3 px-5 flex justify-center">
                      <button
                        disabled={biodata.status === "approved"}
                        onClick={() => handleApprove(biodata)}
                        type="button"
                        className={
                          biodata.status === "approved"
                            ? "mr-3 text-sm bg-white hover:bg-white text-gray-500 py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            : "mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                        }
                      >
                        {biodata.status === "approved" ? "Approved" : "Approve"}
                      </button>
                      <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        See Biodata
                      </button>
                      <button
                        onClick={() => handleDelete(biodata._id)}
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
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

export default AllBiodataTable;
