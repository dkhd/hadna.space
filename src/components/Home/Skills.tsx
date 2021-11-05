import * as React from 'react'

const Skills = (() => {

    return (
      <div className="flex flex-col xl:flex-row bg-nord-nord5">
        <div className="xl:w-2/4">
          <figure className=" relative w-full h-full">
            <img
              className="object-cover h-full w-full"
              src={process.env.PUBLIC_URL + "/image/yogyakarta.jpg"}
              alt="Camille Bismonte @ Unsplash"
            ></img>
            <figcaption className="absolute -mt-16 text-white px-4 py-4 bg-nord-nord0 bg-opacity-70">
              <div>
                <h1 className="text-sm">
                  <a
                    href="https://unsplash.com/photos/vUc03gxjEY4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &copy; Camille Bismonte — Unsplash
                  </a>
                </h1>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col xl:w-2/4 px-12 py-12">
          <span className="text-xl sm:text-3xl xl:text-5xl text-gray-600 font-title font-sans font-semibold text-left">
            Working remotely from Yogyakarta
          </span>
          <span className="flex flex-row content-center ml-3 mt-3">
            <svg
              className="self-center"
              width="13"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#6D6E6E" fillRule="nonzero">
                <path d="M8.346 4.846a.5.5 0 01.638-.057l.07.057 3.5 3.5a.5.5 0 01.057.638l-.057.07-3.5 3.5a.5.5 0 01-.765-.638l.057-.07L11.493 8.7 8.346 5.554a.5.5 0 01-.057-.638l.057-.07z"></path>
                <path d="M1 .5a.5.5 0 01.492.41L1.5 1v4.9a2.3 2.3 0 002.143 2.295L3.8 8.2h8.4a.5.5 0 01.09.992l-.09.008H3.8A3.3 3.3 0 01.505 6.087L.5 5.9V1A.5.5 0 011 .5z"></path>
              </g>
            </svg>
            <span className="self-center ml-3 text-gray-500">
              Yogyakarta is known for its{" "}
              <a
                className="text-nord-nord15 border-b-2 border-dashed border-nord-nord15 hover:text-nord-nord13 hover:border-nord-nord13 font-semibold"
                href="https://en.wikipedia.org/wiki/Special_Region_of_Yogyakarta"
                target="_blank"
                rel="noreferrer"
              >
                cultural heritage
              </a>
            </span>
          </span>
          <span className="text-xl text-gray-700 font-light text-left mt-12 text-justify">
            Hola 👋 My name is{" "}
            <span className="font-semibold">Nurrun M. Shiddieqy Hadna</span>,
            but you can call me just <span className="font-semibold">Diky</span>{" "}
            or <span className="font-semibold">Diky Hadna</span>, for short. I'm
            an Indonesian-based software engineer who previously focused on
            AI/ML and Frontend development, but now switched my path to{" "}
            <span className="font-semibold">NFT/Blockchain development</span>{" "}
            and co-founded{" "}
            <a
              href="https://metadev.wtf"
              target="_blank"
              rel="noreferrer"
              className="text-nord-nord15 border-b-2 border-dashed border-nord-nord15 hover:text-nord-nord13 hover:border-nord-nord13 font-semibold"
            >
              Metadev WTF
            </a>
            , an NFT/Blockchain development team, along with my friends.
          </span>
          <span className="text-xl text-gray-700 font-light text-left mt-5 text-justify">
            With {new Date().getFullYear() - 2010} years{" "}
            <span className="italic">(and still counting)</span> of experience
            working in tech industry (including 7+ years of working closely with
            C-level people; and {new Date().getFullYear() - 2017}+ years of
            remote working experience), I gained sets of skills needed for
            working remotely and product development like team communication
            &amp; coordination, ideation, planning, execution, and delivery.
          </span>
          <span className="text-xl text-gray-700 font-light text-left mt-5 text-justify">
            Since the early COVID-19 pandemic, I've decided to work 100%
            remotely with lots of Zoom, Google Meet, Slack messages, coffee ☕
            and literally lots of nice people.
          </span>
          <span className="text-xl text-gray-700 font-light text-left mt-5 text-justify">
            I now mostly working on NFT project, starting from art generation,
            smart contract, and build minting website, with previously worked on
            frontend and core engine of a service (most of the time, these core
            engines are some sorts of Artifical Intelligence or Machine Learning
            services), and I also have built chatbots for many nice clients.
            Occasionally, I also develop backend service too!
          </span>
          <span className="text-xl text-gray-700 font-light text-left mt-5 text-justify">
            While I might not list them all here, but here are several things
            I'm familiar with: Solidity, ReactJS, NextJS, VueJS, TailwindCSS,
            Typescript, NodeJS, ExpressJS, Python, Flask, Pandas, Tensorflow and
            OpenCV.
          </span>
          <span className="text-xl text-gray-700 font-light text-left mt-5 text-justify">
            Not seeing your required stacks listed? Don't be hesitate to{" "}
            <a
              href="mailto:hi@hadna.space"
              className="text-nord-nord15 border-b-2 border-dashed border-nord-nord15 hover:text-nord-nord13 hover:border-nord-nord13 font-semibold"
            >
              say hi!
            </a>{" "}
            Maybe I forgot to write them down?
          </span>
        </div>
      </div>
    );
})

export default Skills