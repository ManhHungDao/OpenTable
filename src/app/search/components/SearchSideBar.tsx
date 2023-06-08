import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

const SearchSideBar = async ({
  locations,
  cuisines,
  searchParams,
}: {
  cuisines: Cuisine[];
  locations: Location[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const prices = [
    { price: PRICE.CHEAP, value: "$" },
    { price: PRICE.REGULAR, value: "$$" },
    { price: PRICE.EXPENSIVE, value: "$$$" },
  ];

  return (
    <>
      <div className="w-1/5">
        <div className="border-b pb-4">
          <h1 className="mb-2 font-bold">Region</h1>
          {locations.length > 0 &&
            locations.map((location) => (
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    city: location.name,
                  },
                }}
                key={location.id}
                className="font-light text-reg capitalize cursor-pointer hover:underline block"
              >
                {location.name}
              </Link>
            ))}
        </div>
        <div className="border-b pb-4 mt-3">
          <h1 className="mb-2 font-bold">Cuisine</h1>
          {cuisines.length > 0 &&
            cuisines.map((cuisine) => (
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    cuisine: cuisine.name,
                  },
                }}
                className="font-light text-reg capitalize hover:underline cursor-pointer block"
                key={cuisine.id}
              >
                {cuisine.name}
              </Link>
            ))}
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2 font-bold">Price</h1>
          <div className="flex">
            {prices.map(({ price, value }) => (
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    price: price,
                  },
                }}
                className="border w-full text-reg font-light rounded-l p-2"
              >
                {value}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSideBar;
