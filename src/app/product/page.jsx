'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import GlobalLoading from "@/app/loading";

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/products")
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

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 25;

    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = products.slice(indexOfFirst, indexOfLast);
    const totalPages = Math.ceil(products.length / productsPerPage);

    if (loading) return <GlobalLoading></GlobalLoading>;

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-center text-3xl font-bold mb-10 text-neutral">
                Our Products
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {currentProducts.map((product) => (
                    <div
                        key={product.service_id}
                        className="bg-base-100 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-primary transition-all duration-300 p-3 flex flex-col justify-between cursor-pointer"
                    >
                        <div className="relative w-full h-40 rounded-md overflow-hidden bg-primary/10">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="object-cover w-full h-full transform hover:scale-105 transition duration-300"
                            />
                        </div>

                        <div className="mt-3 flex-1">
                            <h2 className="font-semibold text-gray-800 text-lg">
                                {product.title}
                            </h2>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-4">
                            <Link
                                href={`/product/${product.service_id}`}
                                className="inline-block w-full text-center bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-10 space-x-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium bg-base-200 hover:bg-primary/20 disabled:opacity-50 transition"
                >
                    &lt;
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i + 1}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition ${currentPage === i + 1
                                ? "bg-primary text-white"
                                : "bg-base-200 hover:bg-primary/20"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium bg-base-200 hover:bg-primary/20 disabled:opacity-50 transition"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}