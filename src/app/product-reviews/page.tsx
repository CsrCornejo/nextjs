import { Suspense } from "react";

import { Product } from "@/components/products";
import { Reviews } from "@/components/reviews";

export default function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<h2>Loading product...</h2>}>
                <Product />
                <Reviews />
            </Suspense>
        </div>
    );
}