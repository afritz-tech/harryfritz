import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork, FaChevronDown, FaChevronUp } from "../icons";

function Experience({ isDark }) {
  const [toSeeId, setToSeeId] = useState(null);

  const toggleShow = (id) => {
    if (toSeeId === id) {
      setToSeeId(null); // Collapse if the same item is clicked
    } else {
      setToSeeId(id); // Expand the new item
    }
  };

  return (
    <section className="mt-24" id="experience">
      <h1 className="text-4xl font-bold dark:text-white">
        Experience<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div className="p-5 mt-5 rounded-md bg-fadeGray dark:bg-transparent">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            contentStyle={{
              background: isDark ? "#26354d80" : "",
              color: isDark ? "#fff" : "",
            }}
            date=""
            iconStyle={{ background: "#016FFF", color: "#fff" }}
            icon={<MdWork />}
          >
            <h1 className="text-xl font-bold vertical-timeline-element-title"></h1>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p className="text-gray"></p>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                toSeeId === "1" ? "max-h-screen" : "max-h-0"
              }`}
              id="1"
            >
              <div>
                <h5 className="my-2 mt-5 text-xl font-bold">Activities</h5>
                <ul className="ml-5 list-disc text-gray">
                  <li>
                    I undergo as a Full-stack Web in the KodeGo Bootcamp
                    Training
                  </li>
                  <li>I learned About Coding and Fundamentals</li>
                  <li>I learned React Js</li>
                  <li>And on the backend I learned PHP and Laravel</li>
                </ul>
              </div>
              <div>
                <h5 className="my-2 mt-5 text-xl font-bold">Technologies</h5>
                <div className="flex flex-row flex-wrap items-center gap-2 text-gray">
                  <div className="flex items-center gap-2 p-1 rounded-sm">
                    <i class="devicon-php-plain"></i>
                    <span>PHP</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded-sm">
                    <i class="devicon-laravel-original"></i>
                    <span>Laravel</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded-sm">
                    <i className="devicon-react-original colored"></i>
                    <span>React Js</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded-sm">
                    <i className="devicon-nodejs-plain-wordmark colored"></i>
                    <span>Node JS</span>
                  </div>
                  <div className="flex items-center gap-2 p-1 rounded-sm">
                    <i className="devicon-tailwindcss-original colored"></i>
                    <span>Tailwind Css</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 absolute max-[515px]:text-sm max-[515px]:left-[10%] left-[30%] max-[515px]:right-[10%] right-[30%] -bottom-5 flex items-center justify-center">
              <button
                className="flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 rounded-full bg-fadeGray dark:bg-darkBlue drop-shadow-md hover:scale-110"
                onClick={() => toggleShow("1")}
              >
                <span>
                  {toSeeId === "1" ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                {toSeeId === "1" ? "See less" : "See more"}
              </button>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
