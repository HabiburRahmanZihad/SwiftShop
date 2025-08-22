'use client';

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import GlobalLoading from "@/app/loading";

import DashboardNavbar from "./DashboardNavbar";

export default function DashboardLayout({ children }) {

  const { status } = useSession();
  const router = useRouter();

  // ✅ Redirect unauthenticated users to sign-in page
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") return <GlobalLoading></GlobalLoading>;


  return (
    <div className="p-6">
      {/* Shared Navbar */}
      <DashboardNavbar />

      {/* Page Content */}
      <div className="mt-6">{children}</div>
    </div>
  );
}
