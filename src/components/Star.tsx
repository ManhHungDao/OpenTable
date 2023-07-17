import fullStart from "../../public/icons/full-star.png";
import halfStart from "../../public/icons/half-star.png";
import emptyStart from "../../public/icons/empty-star.png";
import Image from "next/image";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverages } from "../../utils/calculateReviewRatingAverages";

const Star = ({ reviews }: { reviews: Review[] }) => {
  const rating = calculateReviewRatingAverages(reviews);
  const renderStars = () => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      const difference = parseFloat((rating - index).toFixed(1));
      if (difference >= 1) stars.push(fullStart);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStart);
        else if (difference > 0.2 && difference <= 0.6) stars.push(halfStart);
        else stars.push(fullStart);
      } else stars.push(emptyStart);
    }
    return stars.map((i) => (
      <>
        <Image src={i} alt="" className="w-3 h-3 mr-1" />
      </>
    ));
  };
  return <div className=" flex items-center">{renderStars()}</div>;
};

export default Star;
