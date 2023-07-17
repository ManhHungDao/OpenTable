import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PRICE, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata = {
  title: "Search Restaurants OpenTable",
  description: "Clone Open Table",
};

const fetchRestaurantSearch = (city: string | undefined) => {
  if (!city) return prisma.restaurant.findMany();
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
      reviews: true,
    },
  });
};

const fetchDataRegion = () => {
  return prisma.location.findMany();
};

const fetchDataCuisine = () => {
  return prisma.cuisine.findMany();
};

const Search = async ({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  const search = searchParams.city;
  const results = await fetchRestaurantSearch(search);
  const locations = await fetchDataRegion();
  const cuisines = await fetchDataCuisine();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          cuisines={cuisines}
          locations={locations}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {results && results.length > 0 ? (
            results.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))
          ) : (
            <p>"No results found"</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
