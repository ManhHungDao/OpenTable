import { RestaurantCardType } from "@/app/page";
import Price from "@/components/Price";
import { PRICE, Cuisine, Location } from "@prisma/client";
import Link from "next/link";
import { calculateReviewRatingAverages } from "../../../../utils/calculateReviewRatingAverages";
import Star from "@/components/Star";
import { Review } from "@prisma/client";

const RestaurantCard = ({ restaurant }: { restaurant: any }) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverages(restaurant.reviews);
    if (rating > 4) return "Awesome";
    if (rating > 3) return "Good";
    if (rating > 0) return "Average";
  };

  return (
    <>
      <div className="border-b flex pb-5">
        <img src={restaurant.main_image} alt="" className="w-44 rounded" />
        <div className="pl-5">
          <h2 className="text-3xl">{restaurant.name}</h2>
          <div className="flex items-start">
            <div className="flex mb-2">
              <Star reviews={restaurant.reviews} />
            </div>
            <p>{renderRatingText()}</p>
          </div>
          <div className="mb-9">
            <div className="font-light flex text-reg">
              <p className="mr-4">
                <Price price={restaurant.price} />
              </p>
              <p className="mr-4">{restaurant.cuisine.name}</p>
              <p className="mr-4">{restaurant.location.name}</p>
            </div>
          </div>
          <div className="text-red-600">
            <Link href={`/restaurant/${restaurant.slug}`}>
              View more information
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
