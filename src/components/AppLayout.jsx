'use client';


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppRootLayout from "./AppRootLayout";
import Image from "next/image";

const AppLayout = () => {
  const [session,setSession] = useState(false);
  const router = useRouter();
  useEffect(()=>{
    setSession(!!localStorage.getItem('session'))
    if(!localStorage.getItem('session')){
      // router.push('/login');
    }
  },[])
  return    <AppRootLayout><div className="flex flex-col">
  {/* Section 1 */}
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-10 max-w-7xl mx-auto">
    <div className="md:w-1/2">
      <Image
        src="https://media.istockphoto.com/id/1321636150/photo/tree-growth-in-nature-and-beautiful-morning.jpg?s=612x612&w=0&k=20&c=sPiljsT5yJeg-3vESl7qtbhdDr908YCnXFCZEQjL1E4="
        alt="Marketing Image 1"
        width={600}
        height={400}
        className="rounded-xl shadow-lg"
      />
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
      <h2 className="text-4xl font-bold mb-4">Grow Your Business</h2>
      <p className="text-lg mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        luctus urna sed urna ultricies ac tempor dui sagittis.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Get Started
      </button>
    </div>
  </section>

  {/* Section 2 */}
  <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 max-w-7xl mx-auto">
    <div className="md:w-1/2 md:pr-12">
      <h2 className="text-4xl font-bold mb-4">Reach More Customers</h2>
      <p className="text-lg mb-6">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
        Learn More
      </button>
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0">
      <Image
        src="https://media.istockphoto.com/id/1320148440/photo/businessman-writing-growth-increasing-arrow-with-chart-and-graph-it-is-symbol-of-business.jpg?s=612x612&w=0&k=20&c=7vpF-R3JDSO94qvw0n4buOjbqIeI49PhzZFObEONV-A="
        alt="Marketing Image 2"
        width={600}
        height={400}
        className="rounded-xl shadow-lg"
      />
    </div>
  </section>
</div>
</AppRootLayout>
}


export default AppLayout