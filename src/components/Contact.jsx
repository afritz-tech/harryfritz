import React from "react";

function Contact() {
  return (
    <section className="mt-24" id="contact">
      <h1 className="text-4xl font-bold dark:text-white">
        Contact<span className="text-blue dark:text-neon">.</span>
      </h1>
      <div className="flex flex-row flex-wrap gap-5 mt-5">
        <div className="flex flex-row items-center gap-3 p-5 rounded-md">
          <img src="/icons/gmail.png" className="w-14 h-14" />
          <div>
            <h6 className="text-gray">Send me an email:</h6>
            <a
              href="mailto:winfourteen@gmail.com"
              className="font-medium dark:text-white"
            >
              forrosueloharry17@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 p-5 rounded-md">
          <img src="/icons/linkedin.png" className="w-14 h-14" />
          <div>
            <h6 className="text-gray">My LinkedIn account:</h6>
            <a
              href="https://www.linkedin.com/in/harry-fritz-forrosuelo-a640a2334/"
              className="font-medium dark:text-white"
            >
              /in/harry-fritz-forrosuelo
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 p-5 rounded-md">
          <img src="/icons/github-sign.png" className="w-14 h-14" />
          <div>
            <h6 className="text-gray">My github account:</h6>
            <a
              href="https://github.com/afritz-tech"
              className="font-medium dark:text-white"
            >
              /Array[]
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 p-5 rounded-md">
          <img src="/icons/instagram.png" className="w-14 h-14" />
          <div>
            <h6 className="text-gray">My instagram account:</h6>
            <a
              href="https://www.instagram.com/iamhaarryyy/"
              className="font-medium dark:text-white"
            >
              /iamhaarryyy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
