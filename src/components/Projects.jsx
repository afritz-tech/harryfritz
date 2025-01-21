import React, { useState, useRef, useEffect } from "react";
import { ProjectCard, ProjectList } from "../links";
import { FaChevronDown, FaChevronUp } from "../icons";

function Projects() {
  const [isShowMore, setIsShowMore] = useState(false);
  const [maxHeight, setMaxHeight] = useState("56rem");
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(
        isShowMore ? `${contentRef.current.scrollHeight}px` : "56rem"
      );
    }
  }, [isShowMore]);

  return (
    <section className="mt-24" id="projects">
      <h1 className="text-4xl font-bold dark:text-white">
        Projects<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div
        ref={contentRef}
        className={`grid grid-cols-2 max-[500px]:grid-cols-1 transition-all duration-300 overflow-hidden mt-5`}
        style={{ maxHeight: maxHeight }}
      >
        {ProjectList.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <button
          className="flex items-center gap-2 px-4 py-2 font-medium text-black transition-all duration-200 rounded-full dark:text-white bg-fadeGray dark:bg-fadeBlue drop-shadow-md hover:scale-110"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          <span>{isShowMore ? <FaChevronUp /> : <FaChevronDown />}</span>
          {isShowMore ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}

export default Projects;
