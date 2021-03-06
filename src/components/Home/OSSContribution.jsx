import * as React from "react";

const LatestPost = () => {
  return (
    <div className="flex flex-col justify-center py-20">
      <div className="px-5 md:px-16 mx-auto">
        <p className="text-5xl text-nord-nord3 font-title font-sans font-bold text-center tracking-wide">
          Contribution to OSS
        </p>
        <p className="text-2xl text-nord-nord3 font-light text-nord-nord3 text-center mt-3 md:w-6/12 mx-auto mt-10">
          My first introduction to OSS (Open Source Software) was in 2007 when I
          was a high school student. Since then, I developed a special interest
          in using OSS and it helped me in so many ways to become who I am
          today. Now, I want to return the favor by contributing to OSS. And
          while it's not that much of a contribution, I like to spend some of my
          time to contribute to OSS.
        </p>
        <p className="text-2xl text-nord-nord3 font-light text-nord-nord3 text-center mt-3 md:w-6/12 mx-auto mt-10">
          Here are some of my small contributions to OSS:
          <ol className="mt-1">
            <li>
              <a
                href="https://github.com/MicrosoftDocs/powerapps-docs/graphs/contributors"
                className="text-nord-nord11 border-b-2 border-dashed border-nord-nord11 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Microsoft PowerApps Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/kimlimjustin/xplorer/graphs/contributors"
                className="text-nord-nord11 border-b-2 border-dashed border-nord-nord11 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
                target="_blank"
                rel="noreferrer"
              >
                Xplorer
              </a>
            </li>
          </ol>
        </p>
        <p className="text-2xl text-nord-nord3 font-light text-nord-nord3 text-center mt-3 md:w-6/12 mx-auto mt-10">
          If you have a Github account, you can follow my{" "}
          <a
            href="https://github.com/dkhd"
            target="_blank"
            rel="noreferrer"
            className="text-nord-nord11 border-b-2 border-dashed border-nord-nord11 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
          >
            Github profile
          </a>{" "}
          and drop stars to my public repositories. You can also help me to
          expand the list above by giving me a suggestion to an OSS project you
          already know or use (or if you are a maintainer of an OSS project and
          need help, ping me!). <br />
          <br />
          In the meanwhile, these are my Github stats generated from{" "}
          <a
            href="https://rahuldkjain.github.io/gh-profile-readme-generator/"
            target="_blank"
            rel="noreferrer"
            className="text-nord-nord11 border-b-2 border-dashed border-nord-nord11 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
          >
            Github Profile Generator
          </a>
          .
        </p>
        <div className="flex flex-col gap-5 md:px-10 mx-auto w-full mt-10">
          <img
            src="https://github-profile-trophy.vercel.app/?username=dkhd"
            alt="dkhd"
            className="mx-auto w-full md:w-6/12"
          />
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=dkhd&show_icons=true&locale=en&layout=compact"
            alt="dkhd"
            className="mx-auto w-full md:w-4/12"
          />
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=dkhd&show_icons=true&locale=en"
            alt="dkhd"
            className="mx-auto w-full md:w-4/12"
          />
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=dkhd&"
            alt="dkhd"
            className="mx-auto w-full md:w-4/12"
          />
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
