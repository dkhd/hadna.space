import * as React from 'react'

const Testimonial = (() => {

    return (
      <div className="flex flex-wrap justify-items-center">
        <div className="px-16 mx-auto">
          <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center tracking-wide">
            What did they say?
          </p>
          <p className="text-2xl text-gray-700 font-light text-gray-700 text-center mt-3">
            From some nice clients I've work for 😊
          </p>
        </div>
        <div className="flex flex-wrap w-full px-10 mt-20 justify-center">
          <div className=" filter drop-shadow-2xl rounded-3xl px-10 py-20 bg-nord-nord14 w-full lg:w-3/12 mx-3 my-3">
            <p className="text-center font-light text-gray-700 text-xl h-3/6">
              "Diky was really easy to work with, accommodating and he replies
              very fast. He is also very pleasant and polite. Highly
              recommended"
            </p>
            <p className="text-center font-light text-gray-700 text-xl mt-20">
              Peiru Teo - <span className="font-medium">Forth.AI</span>
            </p>
            <p className="text-center font-light text-gray-700 text-lg mt-2">
              (AI company based in Singapore)
            </p>
            <div className="flex flex-wrap justify-items-center mt-10 mb-20">
              <div className="mx-auto flex flex-row">
                <a
                  href="https://www.upwork.com/freelancers/~010bc381d70641ac36"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center border-b-2 border-dashed border-nord-nord10 hover:text-nord-nord12 hover:border-nord-nord12 font-medium text-md text-nord-nord10"
                >
                  Read on UpWork{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=" filter drop-shadow-2xl rounded-3xl px-10 py-20 bg-nord-nord14 w-full lg:w-3/12 mx-3 my-3">
            <p className="text-center font-light text-gray-700 text-xl h-3/6">
              "Diky is very prompt, thorough and open for feedback and
              suggestions."
            </p>
            <p className="text-center font-light text-gray-700 text-xl mt-20">
              Alyssa Belton - <span className="font-medium">Clustaar</span>
            </p>
            <p className="text-center font-light text-gray-700 text-lg mt-2">
              (AI company based in France)
            </p>
            <div className="flex flex-wrap justify-items-center mt-10 mb-20">
              <div className="mx-auto flex flex-row">
                <a
                  href="https://www.upwork.com/freelancers/~010bc381d70641ac36"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center border-b-2 border-dashed border-nord-nord10 hover:text-nord-nord12 hover:border-nord-nord12 font-medium text-md text-nord-nord10"
                >
                  Read on UpWork{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=" filter drop-shadow-2xl rounded-3xl px-10 py-20 bg-nord-nord14 w-full lg:w-3/12 mx-3 my-3">
            <p className="text-center font-light text-gray-700 text-xl h-3/6">
              "Kudos to this talented and enthusiastic chatbot designer."
            </p>
            <p className="text-center font-light text-gray-700 text-xl mt-20">
              Bram Alkema - <span className="font-medium">GetBadNews</span>
            </p>
            <p className="text-center font-light text-gray-700 text-lg mt-2">
              (Startup based in Netherlands)
            </p>
            <div className="flex flex-wrap justify-items-center mt-10 mb-20">
              <div className="mx-auto flex flex-row">
                <a
                  href="https://www.upwork.com/freelancers/~010bc381d70641ac36"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center border-b-2 border-dashed border-nord-nord10 hover:text-nord-nord12 hover:border-nord-nord12 font-medium text-md text-nord-nord10"
                >
                  Read on UpWork{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
})

export default Testimonial