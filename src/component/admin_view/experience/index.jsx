"use client";

import { handleDelete, handleExperienceDelete } from "@/services";
import FormControls from "../form-controls";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },

  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },

  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },

  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },

  {
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

export default function AdminExperienceView({
  formData,
  setFormData,
  handleSaveData,
  data,
  setAllData,
}) {
  const handleDeleteItem = async (id) => {
    const response = await handleExperienceDelete(id);

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
                  <span className="font-bold">Position: </span>
                  {item.position}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Company: </span>
                  {item.company}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Duration: </span>
                  {item.duration}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Location: </span>
                  {item.location}
                </p>
                <p className="text-medium font-semibold text-gray-700">
                  <span className="font-bold">Job Profile: </span>
                  {item.jobprofile}
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
          type="button"
          onClick={() => handleSaveData("experience")}
          className="mt-[5px] border border-red-600 bg-red-600 text-white p-3 font-bold text-[16px] focus:bg-red-800 rounded-md cursor-pointer"
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}
