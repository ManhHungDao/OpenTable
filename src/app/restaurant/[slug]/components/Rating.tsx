import Star from "@/components/Star";
import { Review } from "@prisma/client";
import { calculateReviewRatingAverages } from "../../../../../utils/calculateReviewRatingAverages";

const Rating = ({ reviews }: { reviews: Review[] }) => {
  const rating = calculateReviewRatingAverages(reviews);

  return (
    <>
      <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
          <p>
            <Star reviews={reviews} />
          </p>
          <p className="text-reg ml-3">{rating}</p>
        </div>
        <div>
          <p className="text-reg ml-4">
            {reviews.length}
            {reviews.length === 1 || reviews.length === 0
              ? " review"
              : " reviews"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Rating;
