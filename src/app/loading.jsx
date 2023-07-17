import React from "react";
import Header from "@/components/Header";

const loading = () => {
  return (
    <main>
      <Header />
      <div className="grid ">
        <img
          className="h-96 place-self-center"
          src="/spinner.svg"
          alt="Loading..."
        />
      </div>
      {/* <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        Loading...
      </div> */}
    </main>
  );
};

export default loading;
