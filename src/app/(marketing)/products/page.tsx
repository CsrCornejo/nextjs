
import Link from "next/link";

const productID = 100;
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}


export default function ProductList() {
    const random = getRandomInt(2);
  if (random === 1) {
    // Simulating an error
    // Uncomment the line below to see the error handling in action
    // throw new Error('error returned');
  }
    return (
        <>
            <Link href="/" className="text-blue-600 underline">Go Home</Link>
            <h1>Product List</h1>
            <h2><Link href="/products/1" className="text-blue-600 underline">Product 1</Link></h2>
            <h2><Link href="/products/2" className="text-blue-600 underline">Product 2</Link></h2>
            <h2><Link href="/products/3" className="text-blue-600 underline" replace>Product 3</Link></h2>
            <h2><Link href={`/products/${productID}`} className="text-blue-600 underline">Product {productID}</Link></h2>
        </>
    );
}
