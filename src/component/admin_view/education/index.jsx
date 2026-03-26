"use client";

import { handleDelete } from "@/services";
import FormControls from "../form-controls";

const controls = [
  {
    name: "degree",
    placeholder: "Degree",
    type: "text",
    label: "Degree",
  },

  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },

  {
    name: "college",
    placeholder: "College Name",
    type: "text",
    label: "College Name",
  },
];

export default function AdminEducationView({
  formData,
  setFormData,
  handleSaveData,
  data,
  setAllData,
}) {
  const handleDeleteItem = async (id) => {
    const response = await handleDelete(id);

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
                  <span className="font-bold">Degree: </span>
                  {item.degree}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Year: </span>
                  {item.year}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">College: </span>
                  {item.college}
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
              No Job Experience Data Available
            </p>
          )}
        </div>

        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("education")}
          className="mt-[5px] border border-red-600 bg-red-600 text-white p-3 font-bold text-[16px] focus:bg-red-800 rounded-md cursor-pointer"
        >
          Add Education
        </button>
      </div>
    </div>
  );
}
