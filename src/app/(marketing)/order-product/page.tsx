"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing order");
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="px-6 py-2 mt-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
      >
        Place Order
      </button>
    </>
  );
}
