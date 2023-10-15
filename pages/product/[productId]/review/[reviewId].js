import { useRouter } from "next/router";

function ReviewDetails() {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <div>
      <h2>
        {productId} review details {reviewId}{" "}
      </h2>
    </div>
  );
}

export default ReviewDetails;
