import Link from 'next/link'
import React from 'react'

export default function ProductDetails({ params }) {
    return (
        <div>
            <p className='text-5xl'>Product Details for {params.id}</p>
            back to all products

            <Link href="/product" className="text-blue-500 hover:underline">
                View All Products
            </Link>
        </div>
    )
}