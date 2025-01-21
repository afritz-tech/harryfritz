import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GrCertificate, FaExternalLinkAlt } from "../icons";

function Certificates({ isDark }) {
  return (
    <section className="mt-24" id="certificates">
      <h1 className="text-4xl font-bold dark:text-white">
        Certificates<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div className="p-5 mt-5 rounded-md bg-fadeGray dark:bg-transparent">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="relative vertical-timeline-element--work"
            date="June - November 15 2024"
            contentStyle={{
              background: isDark ? "#26354d80" : "",
              color: isDark ? "#fff" : "",
            }}
            iconStyle={{ background: "#016FFF", color: "#fff" }}
            icon={<GrCertificate />}
          >
            <h1 className="text-xl font-bold vertical-timeline-element-title">
              KodeGo Bootcamp Certificate
            </h1>
            <h4 className="vertical-timeline-element-subtitle">
              Full Stack Web Development Completion
            </h4>
            <p className="text-gray">
              I successfully completed the 16-week Full Stack Web Development
              Bootcamp at KodeGo. During this course, I received certifications
              reflecting my commitment and performance throughout the program.
            </p>
            <div className="relative mt-5 group">
              <a
                href="/certificates/certificates_2024.pdf"
                className="cursor-pointer group"
              >
                <img
                  src="/certificates/certicates.jpg"
                  className="transition-all duration-200 group-hover:scale-125"
                />
                <span className="absolute -right-7 -top-3 flex items-center justify-center text-[#8c8c8c] dark:text-fadeBlue scale-0 group-hover:scale-100 transition-all duration-200 text-xl">
                  <FaExternalLinkAlt />
                </span>
              </a>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Certificates;
