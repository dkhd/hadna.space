import * as React from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.hashnode.com",
  cache: new InMemoryCache(),
});

const LatestPost = () => {
  const [data, setdata] = React.useState([]);
  React.useEffect(() => {
    client
      .query({
        query: gql`
          {
            user(username: "dkhd") {
              publication {
                posts {
                  title
                  slug
                }
              }
            }
          }
        `,
      })
      .then((result) => {
        const res = result.data.user.publication.posts.slice(0, 5);
        setdata(res);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center py-20">
      <div className="px-16 mx-auto">
        <p className="text-5xl text-nord-nord6 font-title font-sans font-bold text-center tracking-wide">
          Latest Notes
        </p>
        <p className="text-2xl text-nord-nord6 font-light text-center mt-3">
          Thank's to{" "}
          <a
            href="https://api.hashnode.com/"
            target="_blank"
            rel="noreferrer"
            className="text-nord-nord12 border-b-2 border-dashed border-nord-nord12 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
          >
            Hashnode's GraphQL
          </a>
        </p>
      </div>
      <div className="flex flex-col mt-16 mx-auto px-10 md:px-96">
        {data.length > 0
          ? data.map((items, index) => (
              <span className="text-center my-5" key={index}>
                <a
                  href={"https://note.hadna.space/" + items.slug}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl md:text-2xl text-nord-nord13 border-b-2 border-dashed border-nord-nord13 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
                >
                  {items.title}
                </a>
              </span>
            ))
          : null}
        <p className="text-2xl text-nord-nord6 font-light text-nord-nord6 text-center mt-20">
          Read more notes?{" "}
          <a
            href="https://note.hadna.space/"
            target="_blank"
            rel="noreferrer"
            className="text-nord-nord12 border-b-2 border-dashed border-nord-nord12 hover:text-nord-nord10 hover:border-nord-nord10 font-semibold"
          >
            Get them all here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LatestPost;
