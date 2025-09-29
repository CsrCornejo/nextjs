// import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ReviewDetails({ params }: { params: Promise<{ productId: string; reviewId: string }> }) {
  const resolvedParams = await params;
  //   const random = getRandomInt(2);
  //   if (random === 1) {
  //     throw new Error('error returned');
  //   }
  if (Number(resolvedParams.reviewId) > 1000) {
    // notFound();
    redirect('/');
  }
  return <>
  <h1>Review {resolvedParams.reviewId} for product {resolvedParams.productId}</h1>
  <h2>Details rendered at {new Date().toLocaleTimeString()}</h2>
  </>
}
