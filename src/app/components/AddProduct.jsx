'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import Swal from 'sweetalert2'; // ✅ Import SweetAlert2
import GlobalLoading from "@/app/loading";


export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);


  // ✅ Form submit handler
  const onSubmit = async (data) => {
    if (!session?.user) return;

    setLoading(true);

    const payload = {
      service_id: Date.now().toString().slice(-6), // random 6-digit string
      title: data.name,
      img: data.image,
      price: parseFloat(data.price).toFixed(2),
      description: data.description,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Something went wrong");

      // ✅ Show success alert
      await Swal.fire({
        icon: 'success',
        title: 'Product Added',
        text: '✅ Product added successfully!',
        confirmButtonColor: '#3085d6',
      });

      reset(); // ✅ Clear the form
    } catch (err) {
      // ❌ Show error alert
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message || 'Something went wrong!',
        confirmButtonColor: '#d33',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-200 min-h-[calc(100vh-130px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-7xl bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div className="hidden md:flex items-center justify-center bg-primary/10 p-6">
          <img
            src="/assets/addproduct.png"
            alt="Add Product Illustration"
            className="w-full h-auto max-h-96 object-contain rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full p-6 md:p-10">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center md:text-left">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g., Premium Coffee Beans"
                {...register("name", { required: "Product name is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block mb-1 font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Write product details..."
                {...register("description", { required: "Description is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-primary focus:outline-none"
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block mb-1 font-medium text-gray-700">
                Price ($)
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                placeholder="e.g., 19.99"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0.1, message: "Price must be greater than 0" },
                })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block mb-1 font-medium text-gray-700">
                Image URL
              </label>
              <input
                id="image"
                type="url"
                placeholder="Enter image URL"
                {...register("image", { required: "Image URL is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-semibold rounded-lg py-3 hover:bg-primary/90 transition"
            >
              {loading ? "Adding..." : "Add Product"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
