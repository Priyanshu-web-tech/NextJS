import { notFound } from "next/navigation";

function ReviewDetail({
  params,
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(params.reviewId) > 1000) {
    return notFound();
  }
  return (
    <div>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
    </div>
  );
}

export default ReviewDetail;
