"use client";
import { usePathname } from 'next/navigation';

export default function NotFound() {
    const pathname = usePathname();
    // Extract productId and reviewId from the pathname using split
    // Example: /products/123/reviews/456/not-found
    const parts = pathname.split('/');
    const productId = parts[parts.indexOf('products') + 1] || '';
    const reviewId = parts[parts.indexOf('reviews') + 1] || '';
    return <h2>Review {reviewId} not found for product {productId}</h2>;
}
