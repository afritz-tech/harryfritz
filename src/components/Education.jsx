import React from "react";

function Education() {
  return (
    <section className="mt-24" id="education">
      <h1 className="text-4xl font-bold dark:text-white">
        Education<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div className="mt-5 grid grid-cols-2 max-[650px]:grid-cols-1 gap-2">
        <div className="flex flex-row">
          <div className="flex items-center justify-center p-1 bg-white rounded-md min-h-28 max-h-28 min-w-28 max-w-28">
            <img
              src="education/doncarlosgothong.png"
              className="w-full h-full"
            />
          </div>
          <div className="ms-5">
            <p className="text-sm leading-3 text-gray">Strand:</p>
            <p className="mb-2 font-medium dark:text-white">HUMSS</p>
            <p className="text-sm text-gray">2021-2022</p>
            <p className="text-gray text-[0.90rem]">
              Cebu City Don Carlos A. Gothong MNHS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
