import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const handlePlaceOrder = function () {
    console.log("thank you");
    router.push("/product");
  };
  return (
    <>
      <h2>hello world</h2>
      <Link href="/blog">Blog</Link>
      <button onClick={handlePlaceOrder}>place your order</button>
    </>
  );
}
