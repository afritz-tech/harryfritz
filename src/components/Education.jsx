import React from "react";

function Education() {
  return (
    <section className="mt-24" id="education">
      <h1 className="dark:text-white text-4xl font-bold">
        Education<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div className="mt-5 grid grid-cols-2 max-[650px]:grid-cols-1 gap-2">
        <div className="flex flex-row">
          <div className="bg-white p-1 rounded-md min-h-28 max-h-28 min-w-28 max-w-28 flex items-center justify-center">
            <img
              src="education/doncarlosgothong.png"
              className="h-full w-full"
            />
          </div>
          <div className="ms-5">
            <p className="text-gray text-sm leading-3">Strand:</p>
            <p className="dark:text-white font-medium mb-2">HUMSS</p>
            <p className="text-gray text-sm">2021-2022</p>
            <p className="text-gray text-[0.90rem]">
              Don Carlos A. Gothong MNHS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
