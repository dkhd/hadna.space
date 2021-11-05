import * as React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-wrap justify-items-center">
      <div className="px-16 mx-auto">
        <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center tracking-wide">
          What did they say?
        </p>
        <p className="text-2xl text-gray-700 font-light text-gray-700 text-center mt-3">
          From some nice people I've work with 😊
        </p>
      </div>
      <div className="masonry p-5 md:p-20">
        <div className="filter drop-shadow-2xl  px-10 py-20 bg-nord-nord13 hover:bg-nord-nord14 w-full mx-3 my-3">
          <p className="text-justify font-light text-gray-700 text-xl h-3/6">
            "Diky was really easy to work with, accommodating and he replies
            very fast. He is also very pleasant and polite. Highly recommended"
          </p>
          <p className="text-center font-light text-gray-700 text-xl mt-20">
            Peiru Teo - <span className="font-medium">Forth.ai</span>
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
        <div className="break-inside filter drop-shadow-2xl  px-10 py-20 bg-nord-nord13 hover:bg-nord-nord14 w-full mx-3 my-3">
          <p className="text-justify font-light text-gray-700 text-xl h-3/6">
            "Diky Hadna has a good performance. He could improve his ability as
            a CMO. The one I know from this man, he dont ever let his mind fool,
            I know he read some books every weeks is a good hobby to develop his
            ability.
            <br />
            &nbsp;
            <br />
            He has a good integrity, in fact I ever think to give him a speciall
            training as one of the candidates for next CEO. Even today we aren't
            work in a same company, he still give more attention to us and to
            the teams.
            <br />
            &nbsp;
            <br />
            He has something special that he doesn't realize ...."
          </p>
          <p className="text-center font-light text-gray-700 text-xl mt-20">
            Bio Hadikesuma - <span className="font-medium">CEO @ BHMTC</span>
          </p>
          {/* <p className="text-center font-light text-gray-700 text-lg mt-2">
              (Startup based in Netherlands)
            </p> */}
          <div className="flex flex-wrap justify-items-center mt-10 mb-20">
            <div className="mx-auto flex flex-row">
              <a
                href="https://www.linkedin.com/in/dikyhadna/"
                target="_blank"
                rel="noreferrer"
                className="text-center border-b-2 border-dashed border-nord-nord10 hover:text-nord-nord12 hover:border-nord-nord12 font-medium text-md text-nord-nord10"
              >
                Read on Linkedin{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="break-inside filter drop-shadow-2xl  px-10 py-20 bg-nord-nord13 hover:bg-nord-nord14 w-full mx-3 my-3">
          <p className="text-justify font-light text-gray-700 text-xl h-3/6">
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
        <div className="break-inside filter drop-shadow-2xl  px-10 py-20 bg-nord-nord13 hover:bg-nord-nord14 w-full mx-3 my-3">
          <p className="text-justify font-light text-gray-700 text-xl h-3/6">
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
        <div className="break-inside filter drop-shadow-2xl  px-10 py-20 bg-nord-nord13 hover:bg-nord-nord14 w-full mx-3 my-3">
          <p className="text-justify font-light text-gray-700 text-xl h-3/6">
            "Shiddieqy is one of my best friend we take our Master Degree at UGM
            together. He is a very nice in person and loves to explore new
            technology. He often gives recommendations and implements something
            that will help improve productivity. He was also my colleague at
            Chatbot.expert and very talented one. if you need to person who
            always dedicated his best at work, Shiddieqy is one of the best."
          </p>
          <p className="text-center font-light text-gray-700 text-xl mt-20">
            Albert Chandra -{" "}
            <span className="font-medium">
              Head of System Development @ Universitas Mercu Buana
            </span>
          </p>
          {/* <p className="text-center font-light text-gray-700 text-lg mt-2">
              (Startup based in Netherlands)
            </p> */}
          <div className="flex flex-wrap justify-items-center mt-10 mb-20">
            <div className="mx-auto flex flex-row">
              <a
                href="https://www.linkedin.com/in/dikyhadna/"
                target="_blank"
                rel="noreferrer"
                className="text-center border-b-2 border-dashed border-nord-nord10 hover:text-nord-nord12 hover:border-nord-nord12 font-medium text-md text-nord-nord10"
              >
                Read on Linkedin{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="break-inside filter drop-shadow-2xl  px-10 py-20 bg-nord-nord13 hover:bg-nord-nord14 w-full mx-3 my-3">
          <p className="text-justify font-light text-gray-700 text-xl h-3/6">
            "Diky is a very talented person. We've been working together and it
            was a pleasure working together with him. He always has come up with
            a great idea and executed it very well. Diky for me is not just a
            friend or colleague but also an inspiration to achieve something
            new. He is an excellent communicator and developer. I believe he is
            a great asset for the company who hire him."
          </p>
          <p className="text-center font-light text-gray-700 text-xl mt-20">
            Adi Utama -{" "}
            <span className="font-medium">Software Developer @ Clearview</span>
          </p>
          {/* <p className="text-center font-light text-gray-700 text-lg mt-2">
              (Startup based in Netherlands)
            </p> */}
          <div className="flex flex-wrap justify-items-center mt-10 mb-20">
            <div className="mx-auto flex flex-row">
              <a
                href="https://www.linkedin.com/in/dikyhadna/"
                target="_blank"
                rel="noreferrer"
                className="text-center border-b-2 border-dashed border-nord-nord10 hover:text-nord-nord12 hover:border-nord-nord12 font-medium text-md text-nord-nord10"
              >
                Read on Linkedin{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
