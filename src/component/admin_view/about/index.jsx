"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },

  {
    name: "noofprojects",
    placeholder: "No Of Projects",
    type: "text",
    label: "No Of Projects",
  },

  {
    name: "yearofexperience",
    placeholder: "No Of Experience",
    type: "text",
    label: "No Of Experience",
  },

  {
    name: "numberofclients",
    placeholder: "No Of Clients",
    type: "text",
    label: "No Of Clients",
  },

  {
    name: "skills",
    placeholder: "Skills",
    type: "text",
    label: "Skills",
  },
];

export default function AdminAboutView({
  formData,
  setFormData,
  handleSaveData,
}) {
  // console.log(formData);
  return (
    <div className="w-full">
      <div className="bg-[#d7d7d7] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("about")}
          className="mt-[5px] border border-red-600 bg-red-600 text-white p-3 font-bold text-[16px] focus:bg-red-800 rounded-md cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
