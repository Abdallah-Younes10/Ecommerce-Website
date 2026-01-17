import { StarRating } from "@/Utilities/StarRating";

export const ProductRatingSummary = ({ reviews ,rating }) => {
  if (!reviews?.length) return null;

  const total = reviews.length;

  const ratingCount = reviews.reduce((acc, r) => {
    acc[r.rating] = (acc[r.rating] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div className="flex items-center mb-3">
        <StarRating rating={rating} />
        <p className="ms-2 text-sm font-medium text-body">
          {rating} out of 5
        </p>
      </div>

      <p className="text-sm font-medium text-body">
        {total} global ratings
      </p>

      {[5, 4, 3, 2, 1].map((star) => {
        const count = ratingCount[star] || 0;
        const percent = Math.round((count / total) * 100);

        return (
          <div key={star} className="flex items-center mt-3">
            <span className="w-14 text-sm">{star} star</span>

            <div className="w-2/4 h-4 mx-4 bg-gray-400 rounded">
              <div
                className="h-4 bg-yellow-400 rounded"
                style={{ width: `${percent}%` }}
              />
            </div>

            <span className="text-sm">{percent}%</span>
          </div>
        );
      })}
    </div>
  );
};
