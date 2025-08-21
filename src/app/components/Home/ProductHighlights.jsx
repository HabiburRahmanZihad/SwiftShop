'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductHighlights() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServices(data))
            .catch((error) => console.error("Error fetching services:", error));
    }, []);

    return (
        <section className="py-12 px-2 sm:px-4">
            <h2 className="text-3xl font-bold mb-10 text-neutral">
                Service Highlights
            </h2>

            <div className="flex flex-col gap-10">
                {services.map((service) => (
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
                                href={`/services/${service.service_id}`}
                                className="bg-base-300 text-neutral hover:bg-blue-600 hover:text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg transition"
                            >
                                View Product
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
