import * as React from 'react'

const Showcase = (() => {

    return (
      <div className="flex flex-col justify-items-center py-32">
        <div className="mx-auto px-16">
          <p className="text-5xl text-nord-nord3 font-title font-sans font-bold text-center tracking-wide">
            Selected Works
          </p>
          <p className="text-2xl text-nord-nord3 font-light text-center mt-3">
            From what I've done in the past 🚀
          </p>
        </div>
        <div className="masonry p-5 md:p-20">
          <div className="break-inside border border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">
              Winterly — Beautiful Note-taking App
            </p>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/image/winterly-screenshot.jpg"}
              alt="Winterly"
            ></img>
            <p className="text-center text-xl mt-10 px-10 font-bold italic">
              Role: I own this product 🥰
            </p>
            <p className="text-center font-light text-xl mt-2 px-10">
              Winterly is a beautiful and minimalist note-taking app featuring
              cold winter theme. Winterly do not store your data, meaning that
              whatever you write, stays on your browser. Check it out at{" "}
              <a
                className="font-semibold text-nord-nord11 border-b-2 border-nord-nord11 border-dashed hover:text-nord-nord14 hover:border-nord-nord14"
                href="https://winterly.app"
                target="_blank"
                rel="noreferrer"
              >
                Winterly.app
              </a>
              !
            </p>
          </div>
          <div className="break-inside border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">
              Pubwatch — Ad Tracking Analytics
            </p>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/image/pubwatch-screenshot.jpg"}
              alt="Ad Tracking"
            ></img>
            <p className="text-center text-xl mt-10 px-10 font-bold italic">
              Role: frontend, backend, core-engine
            </p>
            <p className="text-center font-light text-xl mt-2 px-10">
              Made for an interal audit system for a digital advertising company
              based in Australia. It was nice to utilize AWS for this project.
            </p>
          </div>
          <div className="break-inside border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">
              Get Bad News — Chatbot
            </p>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/image/badnews-bot.png"}
              alt="Vanilatte"
            ></img>
            <p className="text-center text-xl mt-10 px-10 font-bold italic">
              Role: Chatbot Developer
            </p>
            <p className="text-center font-light text-xl mt-2 px-10">
              It is a chatbot to simulate when all the bad news has spread
              massively and we have no clue whether we are reading the correct
              information or not. It was made for a company based in Netherland.
            </p>
          </div>
          <div className="break-inside border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">
              AI-based Entity Extraction (Core Engine)
            </p>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/image/ner-2.png"}
              alt="Vanilatte"
            ></img>
            <p className="text-center text-xl mt-10 px-10 font-bold italic">
              Role: core-engine
            </p>
            <p className="text-center font-light text-xl mt-2 px-10">
              Providing a service to extract important information from an
              unstructured text. This service is utilizing NLP (Natural Language
              Processing), which is a branch of AI.
            </p>
          </div>
          <div className="break-inside border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">
              Vanilatte — Digital Wedding Invitation
            </p>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/image/vanilatte-screenshot.jpg"}
              alt="Vanilatte"
            ></img>
            <p className="text-center text-xl mt-10 px-10 font-bold italic">
              Role: I own this product 🥰
            </p>
            <p className="text-center font-light text-xl mt-2 px-10">
              Another digital products of mine. Vanilatte will help you to build
              your personalized digital wedding invitation. It also has a nice
              guest management system where your guests need only to scan a
              unique QR code to check-in. Find more information at{" "}
              <a
                className="font-semibold text-nord-nord11 border-b-2 border-nord-nord11 border-dashed hover:text-nord-nord14 hover:border-nord-nord14"
                href="https://vanilatte.com"
                target="_blank"
                rel="noreferrer"
              >
                Vanilatte.com
              </a>
              !
            </p>
          </div>
          <div className="break-inside border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-semibold text-center mb-10 px-10">
              Maucepat — AI Image Processor
            </p>
            <img
              className="w-full"
              src={process.env.PUBLIC_URL + "/image/maucepat-screenshot-2.jpg"}
              alt="Vanilatte"
            ></img>
            <p className="text-center text-xl mt-10 px-10 font-bold italic">
              Role: frontend, core-engine
            </p>
            <p className="text-center font-light text-xl mt-2 px-10">
              Maucepat provides bulk image-processing using AI, mainly for
              removing image background and then put custom background and
              badges. This service is intended for online shop owners who have
              multiple product photos and do not have time to edit the photos
              one-by-one.
            </p>
          </div>
          <div className="break-inside border filter drop-shadow-2xl w-full  md:px-10 py-10 bg-nord-nord6 hover:bg-nord-nord14 mx-3 my-4">
            <p className="text-2xl text-gray-700 font-bold text-center mb-10 px-10">
              ✨ Your NEXT Projects ✨
            </p>
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Vanilatte"
            ></img>
            <p className="text-center font-light text-xl mt-10 px-10">
              A popular Chinese proverb said that,{" "}
              <em>
                “The best time to plant a tree was 20 years ago. The second best
                time is now.”
              </em>{" "}
              <br />
              &nbsp;
              <br />
              Don't let your project ideas turned into nothing, so why don't you
              start now? I would be very glad to help you to bring your ideas to
              life.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto mt-20 px-16">
          <p className="text-5xl text-nord-nord3 font-title font-sans font-bold text-center">
            See more works
          </p>
          <p className="text-2xl text-nord-nord3 font-light text-center mt-3">
            I put them all in Mini Product section
          </p>
          <div className="mx-auto mt-20">
            <a
              className="shadow-xl bg-nord-nord11 hover:bg-nord-nord6 hover:text-nord-nord0 px-8 py-5 rounded-full text-white font-title font-light"
              href="https://mini.hadna.space/"
              target="_blank"
              rel="noreferrer"
            >
              👏 &nbsp; Check out Mini Products
            </a>
          </div>
        </div>
      </div>
    );
})

export default Showcase