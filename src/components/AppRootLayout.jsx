"use client";
import { usePathname, useRouter } from "next/navigation";
import Header from "./Header/Header";
import { useEffect, useState } from "react";

 // Only needed for Next.js App Router


export default function AppRootLayout({ children }) {

  const pathname = usePathname();
  const router = useRouter();
  useEffect (()=>{
  
    if(!localStorage.getItem('session') && pathname === '/services'){
      router.replace('/login');
    }
  },[])
  return (
    <div className="flex min-h-screen flex-col">
      {/* ---------- HEADER ---------- */}
      <Header/>

      {/* ---------- MAIN ---------- */}
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-gray-500 sm:px-6 lg:px-8">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
