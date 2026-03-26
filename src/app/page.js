import ClientAboutView from "@/component/client_view/about";
import ClientContactView from "@/component/client_view/contact";
import ClientExperienceViewAndEducationView from "@/component/client_view/experience";
import ClientHomeView from "@/component/client_view/home";
import ClientProjectView from "@/component/client_view/project";
import Image from "next/image";

async function extractAllDatas(currentSection) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/${currentSection}/get`,
    {
      method: "GET",
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");
  // const contactSectionData = await extractAllDatas("contact");

  return (
    <div>
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ClientExperienceViewAndEducationView
        experienceData={experienceSectionData}
        educationData={educationSectionData}
      />

      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
