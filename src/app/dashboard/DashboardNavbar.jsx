"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const pathname = usePathname();

  const navItemClass = (isActive) =>
    `px-4 py-2 rounded-md text-sm font-medium transition ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <nav className="bg-gray-100 p-4 rounded-md flex gap-4">
      <Link href="/dashboard">
        <p className={navItemClass(pathname === "/dashboard")}>Overview</p>
      </Link>

      <Link href="/dashboard/add-product">
        <p className={navItemClass(pathname === "/dashboard/add-product")}>
          Add Product
        </p>
      </Link>
    </nav>
  );
}
