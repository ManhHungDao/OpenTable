"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Cuisine, Location } from "@prisma/client";

const SearchSideBar = async ({
  locations,
  cuisines,
}: {
  cuisines: Cuisine[];
  locations: Location[];
}) => {
  const router = useRouter();
  const [checkLocation, setCheckLocation] = useState("");
  const [checkCuisine, setCheckCuisine] = useState("");

  useEffect(() => {
    if (!checkLocation && !checkCuisine) return;
    console.log("checkLocation", checkLocation);
    console.log("checkCuisine", checkCuisine);

    // router.push(``);
  }, [checkLocation, checkCuisine]);

  return (
    <>
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2 font-bold">Region</h1>
          {locations.length > 0 &&
            locations.map((location) => (
              <div
                className="flex items-center cursor-pointer"
                key={location.name}
              >
                <input
                  type="radio"
                  id={location.name}
                  name="location"
                  value={location.name}
                  className=" cursor-pointer"
                  onClick={() => {
                    setCheckLocation(location.name);
                  }}
                />
                <label
                  className="font-light text-reg capitalize ml-2  cursor-pointer"
                  htmlFor={location.name}
                >
                  {location.name}
                </label>
              </div>
            ))}
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="mb-2 font-bold">Cuisine</h1>
          {cuisines.length > 0 &&
            cuisines.map((cuisine) => (
              <div className="flex items-center" key={cuisine.name}>
                <input
                  type="radio"
                  id={cuisine.name}
                  name="cuisine"
                  value={cuisine.name}
                  className=" cursor-pointer"
                  onClick={() => {
                    setCheckCuisine(cuisine.name);
                  }}
                />
                <label
                  className="font-light text-reg capitalize ml-2  cursor-pointer"
                  htmlFor={cuisine.name}
                >
                  {cuisine.name}
                </label>
              </div>
            ))}
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2 font-bold">Price</h1>
          <div className="flex">
            <button className="border w-full text-reg font-light rounded-l p-2">
              $
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2">
              $$
            </button>
            <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
              $$$
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSideBar;
