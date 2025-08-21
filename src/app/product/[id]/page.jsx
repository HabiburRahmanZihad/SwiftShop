'use client';

import Link from "next/link";
import { useState, useEffect, use } from "react";

export default function ProductDetails({ params }) {
    // Unwrap the params (required for latest Next.js)
    const { id } = use(params); // ⬅️ This is the key change

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/productsdata.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, []);

    const product = products.find((p) => p.service_id === id);

    if (loading) {
        return <div className="p-8 text-center text-gray-600">Loading...</div>;
    }

    if (!product) {
        return (
            <div className="p-8">
                <p className="text-red-500 text-xl">Product not found!</p>
                <Link href="/product" className="text-blue-500 underline">
                    Back to Products
                </Link>
            </div>
        );
    }

    const relatedProducts = products.filter((p) => p.service_id !== product.service_id);

    return (
        <div className="py-4 px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="text-sm mb-4 px-2">
                <Link href="/product" className="text-blue-500 hover:underline">
                    Products
                </Link>{" "}
                / <span className="text-gray-600">Product Details</span>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow">
                <div>
                    <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="font-semibold text-lg text-gray-800">
                        Price: ${product.price}
                    </p>

                    <Link
                        href="/product"
                        className="inline-block mt-6 px-4 py-2 bg-gray-200 hover:bg-primary hover:text-white rounded-lg"
                    >
                        Back to Products
                    </Link>
                </div>

                <div>
                    <img
                        src={product.img}
                        alt={product.title}
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {relatedProducts.slice(0, 4).map((related) => (
                        <div
                            key={related.service_id}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                        >
                            <img
                                src={related.img}
                                alt={related.title}
                                className="rounded-lg mb-3 w-full h-40 object-cover"
                            />
                            <h3 className="font-semibold">{related.title}</h3>
                            <p className="text-sm text-gray-500 line-clamp-2">
                                {related.description}
                            </p>
                            <Link
                                href={`/product/${related.service_id}`}
                                className="text-blue-500 text-sm hover:underline mt-2 inline-block"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}