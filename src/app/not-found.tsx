"use client";

import Header from "@/components/Header";
import Image from "next/image";
const error = ({ error }: { error: Error }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/error.png"
          alt=""
          width="100"
          height="100"
          className="w-56 mb-8"
        />
        <div className="bg-white px-9 py-14 shadow rounded">
          <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
          <h3 className="text-reg font-bold">
            We couldn't find that restaurant
          </h3>
          <h3 className="mt-6 text-sm font-light">Error Code: 400</h3>
        </div>
      </div>
    </>
  );
};

export default error;
