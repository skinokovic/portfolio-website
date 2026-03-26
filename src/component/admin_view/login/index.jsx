"use client";

import FormControls from "../form-controls";

const controls = [
  {
    name: "username",
    placeholder: "Enter Username",
    type: "text",
    label: "Enter Username",
  },

  {
    name: "password",
    placeholder: "Enter Password",
    type: "text",
    label: "Enter Password",
  },
];

export default function Login({ formData, setFormData, handleLogin }) {
  // console.log(formData);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-700 shadow-lg rounded-lg px-8 pt-6 pb-8">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          type="button"
          onClick={handleLogin}
          className="w-full mt-6 bg-black text-white font-bold py-3 rounded-md hover:bg-red-700 focus:outline-none 
          focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-300 cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
}
