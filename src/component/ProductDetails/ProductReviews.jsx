export const ProductReviews = ({ reviews = [] }) => {
  if (!reviews.length) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>

      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="border p-4 rounded">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold">
                {review.reviewerName || "Anonymous"}
              </span>
              <span>⭐ {review.rating}</span>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
