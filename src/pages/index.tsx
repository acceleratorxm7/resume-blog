import Navbar from "@/components/Layout/Navbar";
import AboutMeSlide from "@/components/Slides/AboutMeSlide";
import ResumeSlide from "@/components/Slides/ResumeSlide";
import TechStackSlide from "@/components/Slides/TechStackSlide";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chanwoo&apos;s Online Portfolio</title>
      </Head>
      <Navbar />
      <div className="px-8 md:px-0">
        <AboutMeSlide />
        <TechStackSlide />
        <ResumeSlide />
      </div>
    </>
  );
}
