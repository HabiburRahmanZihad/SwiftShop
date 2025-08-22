'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlights() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        // Fetch products from your API route
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.slice(0, 4)); // Only show 4
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false); // Set loading to false if there's an error
            });
    }, []);

    return (
        <section className="py-12 px-2 sm:px-4">
            <h2 className="text-3xl font-bold mb-10 text-neutral">
                Products Highlights
            </h2>

            {loading ? (
                <div className="text-center text-xl text-gray-500">
                    <p>Loading products...</p>
                    <p>Please wait while we fetch the latest products for you.</p>
                </div>
            ) : (
                <div className="flex flex-col gap-10">
                    {products.map((service) => (
                        <div
                            key={service.service_id}
                            className="flex flex-col md:flex-row-reverse items-center gap-6 bg-base-200 text-primary-content p-6 rounded-lg shadow-md border"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full md:w-80 h-40 md:h-52 object-cover rounded-lg"
                            />

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {service.title}
                                </h3>
                                <p className="mb-4 line-clamp-4 text-base-content">
                                    {service.description}
                                </p>
                                <Link
                                    href={`/product/${service.service_id}`}
                                    className="bg-base-300 text-neutral hover:bg-blue-600 hover:text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg transition"
                                >
                                    View Product
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* See More Products Button */}
            <div className="text-center mt-10">
                <Link
                    href="/product"
                    className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition"
                >
                    See More Products
                </Link>
            </div>
        </section>
    );
}