import { useRouter } from "next/router";

function ProductDetailsPage() {
  const router = useRouter();
  const details = router.query.productId;
  return <div>{details} product details</div>;
}

export default ProductDetailsPage;
