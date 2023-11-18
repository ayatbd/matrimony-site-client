<div className="table w-full p-2">
  <table className="w-full border">
    <thead>
      <tr className="bg-gray-50 border-b">
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center">Seller</div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center">Toy Name</div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center">Sub-category</div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center">Price</div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center">
            vailable Quantity
          </div>
        </th>
        <th className="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
          <div className="flex items-center justify-center">
            View Details button
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        key={c._id}
        className="bg-gray-100 text-center border-b text-sm text-gray-600"
      >
        <td className="p-2 border-r">{c.seller}</td>
        <td className="p-2 border-r">{c.toyname}</td>
        <td className="p-2 border-r">{c.category}</td>
        <td className="p-2 border-r">{c.price}</td>
        <td className="p-2 border-r">{c.quantity}</td>
        <td className="p-2 border-r">
          <div>
            <button className="btn btn-ghost p-2">View Details</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
