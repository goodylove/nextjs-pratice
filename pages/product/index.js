import Link from "next/link";

function Product({ productsDetails = 29 }) {
  return (
    <>
      <h2>
        <Link href="/product/2">product details 2</Link>
      </h2>
      <h2>
        <Link href="/product/3" replace>
          product details 3
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productsDetails}`}>
          product details {productsDetails}
        </Link>
      </h2>
    </>
  );
}

export default Product;
