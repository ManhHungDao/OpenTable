import NavBar from "@/components/NavBar";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavbar";
import MenuCard from "../components/MenuCard";

const RestaurantMenu = () => {
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavbar />
        {/* menu */}
        <main className="bg-white mt-5">
          <div>
            <div className="mt-4 pb-1 mb-1">
              <h1 className="font-bold text-4xl">Menu</h1>
            </div>
            <div className="flex flex-wrap justify-between">
              <MenuCard />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default RestaurantMenu;
