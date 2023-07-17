import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "../components/MenuCard";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) notFound();
  return restaurant.items;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar slug={params.slug} />
        {/* menu */}
        <main className="bg-white mt-5">
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            {menu.length > 0 ? (
              menu.map((item, i) => <MenuCard item={item} key={i} />)
            ) : (
              <p>This restaurant does not have a menu</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default RestaurantMenu;
