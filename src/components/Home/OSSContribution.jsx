import * as React from "react";

const LatestPost = () => {
  return (
    <div className="flex flex-col justify-center py-20">
      <div className="px-16 mx-auto">
        <p className="text-5xl text-gray-600 font-title font-sans font-bold text-center tracking-wide">
          Contribution to OSS
        </p>
        <p className="text-2xl text-gray-700 font-light text-gray-700 text-center mt-3 md:w-6/12 mx-auto mt-10">
          I have a special interest in OSS (Open Source Software). And while
          it's not that much of a contribution, I'm planning to spend some of my
          time to contribute to OSS. You can follow my{" "}
          <a
            href="https://github.com/dkhd"
            target="_blank"
            rel="noreferrer"
            className="text-dkhd-purple-500 border-b-2 border-dashed border-dkhd-purple hover:text-dkhd-purple-600 font-semibold"
          >
            Github profile
          </a>{" "}
          and drop stars to my public repositories, and you can also recommend
          me to contribute to an OSS project (no matter how small the project
          is, I'll do my best).
          <br />
          <br />
          In the meanwhile, these are my Github stats generated from{" "}
          <a
            href="https://rahuldkjain.github.io/gh-profile-readme-generator/"
            target="_blank"
            rel="noreferrer"
            className="text-dkhd-purple-500 border-b-2 border-dashed border-dkhd-purple hover:text-dkhd-purple-600 font-semibold"
          >
            Github Profile Generator
          </a>
        </p>
        <div className="flex flex-col gap-2 px-10 mx-auto w-full mt-10">
          <img
            src="https://github-profile-trophy.vercel.app/?username=dkhd"
            alt="dkhd"
            className="mx-auto"
          />
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=dkhd&show_icons=true&locale=en&layout=compact"
            alt="dkhd"
            className="mx-auto"
          />
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=dkhd&show_icons=true&locale=en"
            alt="dkhd"
            className="mx-auto"
          />
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=dkhd&"
            alt="dkhd"
            className="mx-auto"
          />
        </div>
      </div>
      <hr className="mt-36 border-b-2 border-dkhd-purple border-dashed" />
    </div>
  );
};

export default LatestPost;
