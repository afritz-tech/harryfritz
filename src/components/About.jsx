function About() {
  return (
    <section className="mt-24" id="about">
      <h1 className="text-4xl font-bold dark:text-white">
        About me<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div className="flex flex-row max-[800px]:flex-col gap-5">
        <div className="flex-1">
          <p className="text-xl text-gray dark:text-fadeGray mt-5 indent-20 max-[800px]:indent-5">
            I'm Harry Fritz Forrosuelo, a{" "}
            <span className="font-semibold text-blue dark:text-neon">
              full-stack web developer
            </span>{" "}
            with expertise in technologies like{" "}
            <span className="font-semibold text-blue dark:text-neon">
              React.js
            </span>
            ,{" "}
            <span className="font-semibold text-blue dark:text-neon">PHP</span>,{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Laravel
            </span>
            ,{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Node.js
            </span>
            ,{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Mysql
            </span>
            ,{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Javascript
            </span>
            ,{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Bootstrap
            </span>
            , and{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Tailwind CSS
            </span>
            . Known as "Harry," I've been passionate about computers since I was
            11 and began programming at 24, constantly learning and expanding my
            skills.
          </p>
          <p className="text-xl text-gray dark:text-fadeGray mt-5 indent-20 max-[800px]:indent-5">
            I graduated Senior High School on July 2021-2022 with HUMSS
            (Humanities and Social Sciences), A{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Web Application Development
            </span>
            . I also completed a 6-month{" "}
            <span className="font-semibold text-blue dark:text-neon">
              Full-stack Web Development
            </span>{" "}
            course at the KodeGo Bootcamp, where I received a certifications.
            Currently, I'm am upskilling my skills to create dynamic and
            efficient web applications.
          </p>
        </div>
        <div className="bg-blue-300 flex items-center justify-end relative w-72 h-96 max-[800px]:mt-5">
          <div className="absolute inset-0 z-0 border-4 rounded-md top-2 -right-3 left-5 -bottom-5 border-neon"></div>{" "}
          {/* Background frame */}
          <figure className="relative z-10">
            {" "}
            {/* Foreground image */}
            <img
              src="/me.jpg"
              alt="my-picture"
              className="w-full h-full rounded-md"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;
