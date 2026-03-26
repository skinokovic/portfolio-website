"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../assests/logo2.png";
import { Link as LinkScroll, scroller } from "react-scroll";
const menuItem = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  // {
  //   id: "education",
  //   label: "Education",
  // },
  {
    id: "project",
    label: "Project",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer text-md animation-hover inline-block relative ${
        activeLink === item.id
          ? "text-green-main animation-active shadow-green-main"
          : "text-[#000] font-bold hover:text-green-main"
      }`}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  });

  return (
    <>
      <header
        className={`fixed top-0 w-full z-30 bg-white-500 transition-all ${scrollActive ? "shadow-md pt-0" : "pt-4"}`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-green-main">
              <Image
                src={logo}
                alt="about image"
                width={120}
                height={100}
                className="w-full h-auto"
                quality={75}
              />
            </div>
          </div>

          <ul className="hidden lg:flex col-start-4 col-end-8 text-[#000] item items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItem}
            />
          </ul>

          <div className="col-start-10 col-end-12 flex justify-end">
            <button
              onClick={() =>
                scroller.scrollTo("contact", {
                  duration: 1500,
                  delay: 100,
                  smooth: true,
                })
              }
              className="py-2 px-5 border-2 border-[#F43F5E] text-[#F43F5E] font-semibold 
              rounded-full text-xl hover:bg-[#F43F5E] hover:text-white hover:shadow-lg 
              transition-all duration-300 ease-in-out cursor-pointer"
              id="contact"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </header>

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItem}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
