"use client";

import AdminHomeView from "@/component/admin_view/home";
import AdminAboutView from "@/component/admin_view/about";
import AdminContactView from "@/component/admin_view/contact";
import AdminEducationView from "@/component/admin_view/education";
import AdminExperienceView from "@/component/admin_view/experience";
import AdminProjectView from "@/component/admin_view/project";
import { useEffect, useState } from "react";
import { addData, getData, login, updateData } from "@/services";
import Login from "@/component/admin_view/login";

const initializeHomeFormData = {
  heading: "",
  summary: "",
};

const initializeAboutFormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  numberofclients: "",
  skills: "",
};

const initializeExperienceFormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initializeEducationFormData = {
  degree: "",
  year: "",
  college: "",
};

const initializeProjectFormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

const initializeLoginFormData = {
  username: "",
  password: "",
};

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("home");
  const [homeViewFormData, setHomeViewFormData] = useState(
    initializeHomeFormData,
  );
  const [aboutViewFormData, setAboutViewFormData] = useState(
    initializeAboutFormData,
  );
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initializeExperienceFormData,
  );

  const [educationViewFormData, setEducationViewFormData] = useState(
    initializeEducationFormData,
  );

  const [projectViewFormData, setProjectViewFormData] = useState(
    initializeProjectFormData,
  );

  const [allData, setAllData] = useState({});
  const [update, setUpdate] = useState(false);
  const [authUser, setAuthUser] = useState(false);
  const [loginFormData, setLoginFormdata] = useState(initializeLoginFormData);

  const menuItem = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleSaveData={handleSaveData}
        />
      ),
    },

    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          setFormData={setExperienceViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.experience}
          setAllData={setAllData}
        />
      ),
    },

    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          setFormData={setEducationViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.education}
          setAllData={setAllData}
        />
      ),
    },

    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          setFormData={setProjectViewFormData}
          handleSaveData={handleSaveData}
          data={allData?.project}
          setAllData={setAllData}
        />
      ),
    },

    {
      id: "contact",
      label: "Contact",
      component: (
        <AdminContactView data={allData?.contact} setAllData={setAllData} />
      ),
    },
  ];

  async function handleSaveData() {
    const dataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      experience: experienceViewFormData,
      education: educationViewFormData,
      project: projectViewFormData,
    };

    const response = update
      ? await updateData(currentSelectedTab, dataMap[currentSelectedTab])
      : await addData(currentSelectedTab, dataMap[currentSelectedTab]);
    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllData();
    }
  }

  useEffect(() => {
    extractAllData();
  }, [currentSelectedTab]);

  async function extractAllData() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "home" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response && response.data[0]);
      setUpdate(true);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }
  }

  function resetFormDatas() {
    setHomeViewFormData(initializeHomeFormData);
    setAboutViewFormData(initializeAboutFormData);
    setExperienceViewFormData(initializeExperienceFormData);
    setEducationViewFormData(initializeEducationFormData);
    setProjectViewFormData(initializeProjectFormData);
  }

  async function handleLogin() {
    const res = await login(loginFormData);
    console.log(res, "login");

    if (res?.success) {
      setAuthUser(true);
      sessionStorage.setItem("authUser", JSON.stringify(true));
    }
  }

  useEffect(() => {
    setAuthUser(JSON.parse(sessionStorage.getItem("authUser")));
  }, []);

  if (!authUser)
    return (
      <Login
        formData={loginFormData}
        setFormData={setLoginFormdata}
        handleLogin={handleLogin}
      />
    );

  return (
    <div className="border-b border-gray-400">
      <nav className="-mb-0.5 flex justify-center space-x-6" role="tablist">
        {menuItem.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl text-black cursor-pointer"
            onClick={() => {
              setCurrentSelectedTab(item.id);
              resetFormDatas();
              setUpdate(false);
            }}
          >
            {item.label}
          </button>
        ))}

        <button
          onClick={() => {
            setAuthUser(false);
            sessionStorage.removeItem("authUser");
          }}
          className="p-4 font-bold text-xl text-black cursor-pointer"
        >
          {" "}
          Logout
        </button>
      </nav>

      {/* <div className="mt-10 p-10">
        {menuItem.map(
          (item) => item.id === currentSelectedTab && item.component,
        )}
      </div> */}
      <div className="mt-10 p-10">
        {menuItem.map((item) =>
          item.id === currentSelectedTab ? (
            <div key={item.id}>{item.component}</div>
          ) : null,
        )}
      </div>
    </div>
  );
}
