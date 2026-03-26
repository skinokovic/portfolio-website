"use client";

import { handleContactDelete } from "@/services";

export default function AdminContactView({ data, setAllData }) {
  console.log(data, "contactData");

  const handleDeleteItem = async (id) => {
    const response = await handleContactDelete(id);

    if (response.success) {
      const updateData = data.filter((item) => item._id !== id);
      setAllData((prevData) => ({
        ...prevData,
        education: updateData,
      }));
      console.log("Item deleted successfully");
    } else {
      console.log("Failed to delete item", response.message);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10 space-y-6">
          {data && data.length ? (
            data.map((item, index) => (
              <div
                key={index}
                className="flex bg-[#ffffff] flex-col gap-2 p-6 rounded-lg shadow-md border border-gray-600 hover:border-gray-800 transition duration-300"
              >
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Name: </span>
                  {item.name}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Email: </span>
                  <a href={item.email} target="/blank">
                    {item.email}
                  </a>
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Message: </span>
                  {item.message}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="bg-red-500 text-white p-2 rounded cursor-pointer"
                  >
                    Delete
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded cursor-pointer">
                    Edit
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No Email Message Available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
