import Feed from "@components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and share tutorials
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI powered tutorials
        </span>
      </h1>
      <p className="desc text-center">bla bla bla bla</p>

      <Feed />
    </section>
  );
};

export default Home;
