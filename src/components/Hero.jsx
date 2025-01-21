import React from "react";
import { GrCopy, BsChatDots } from "../icons";

function Hero() {
  const handleNavigate = (path) => {
    document.getElementById(path)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mt-10" id="hero">
      <div className="flex items-center justify-center w-full text-center">
        <h1 className="px-5 py-3 text-lg font-medium rounded-full text-darkerGray dark:text-gray bg-fadeGray dark:bg-fadeBlue">
          Hello!
          <span className="mx-2">👋</span>
          I'm Harry Fritz Forrosuelo
        </h1>
      </div>
      <div className="flex items-center justify-center mt-10">
        <h2 className="text-6xl max-[600px]:text-5xl max-[350px]:text-4xl font-extrabold text-center dark:text-white">
          A{" "}
          <span className="text-blue dark:text-neon">
            full-stack web developer
          </span>{" "}
          with a focus on{" "}
          <span className="text-blue dark:text-neon">
            front-end development
          </span>
          .
        </h2>
      </div>
      <div className="flex items-center justify-center mt-10">
        <ul className="flex items-center gap-5">
          <li className="flex flex-row max-[600px]:flex-col gap-2 items-center justify-center max-[600px]:text-center dark:text-gray">
            <span className="px-3 py-1 font-medium rounded-lg bg-fadeGray dark:bg-fadeBlue dark:text-white">
              5+
            </span>
            <div className="flex flex-col text-sm max-[350px]:text-[12px] leading-[0.90rem]">
              <p>Hours</p>
              <p>coding a day</p>
            </div>
          </li>
          <span className="h-6 w-[1px] border-[1px] border-dashed border-darkGray dark:border-gray"></span>
          <li className="flex flex-row max-[600px]:flex-col gap-2 items-center justify-center max-[600px]:text-center dark:text-gray">
            <span className="px-3 py-1 font-medium rounded-lg bg-fadeGray dark:bg-fadeBlue dark:text-white">
              100k+
            </span>
            <div className="flex flex-col text-sm max-[350px]:text-[12px] leading-[0.90rem]">
              <p>Lines of</p>
              <p>code written</p>
            </div>
          </li>
          <span className="h-6 w-[1px] border-[1px] border-dashed border-darkGray dark:border-gray"></span>
          <li className="flex flex-row max-[600px]:flex-col gap-2 items-center justify-center max-[600px]:text-center dark:text-gray">
            <span className="px-3 py-1 font-medium rounded-lg bg-fadeGray dark:bg-fadeBlue dark:text-white">
              500+
            </span>
            <div className="flex flex-col text-sm max-[350px]:text-[12px] leading-[0.90rem]">
              <p>Cups of</p>
              <p>coffee consumed</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center gap-5 p-3 mt-10">
        <a
          href="/resume_.pdf"
          className="flex items-center justify-center gap-2 px-6 py-2 text-xl font-medium transition-all duration-200 rounded-full bg-blue dark:bg-neon text-fadeGray dark:text-darkBlue hover:scale-110"
        >
          <span>
            <GrCopy />
          </span>
          Resume
        </a>
        <button
          className="flex items-center justify-center gap-2 px-6 py-2 text-xl font-medium transition-all duration-200 rounded-full bg-fadeGray dark:bg-fadeBlue dark:text-white hover:scale-110"
          onClick={() => {
            handleNavigate("contact");
          }}
        >
          <span>
            <BsChatDots />
          </span>
          Contact
        </button>
      </div>
    </section>
  );
}

export default Hero;
