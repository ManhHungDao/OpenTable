import { Review } from "@prisma/client";

export const calculateReviewRatingAverages = (reviews: Review[]) => {
  if (!reviews || reviews.length === 0) return 0;
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
