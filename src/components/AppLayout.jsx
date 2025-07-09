'use client';


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AppRootLayout from "./AppRootLayout";

const AppLayout = () => {
  const [session,setSession] = useState(false);
  const router = useRouter();
  useEffect(()=>{
    setSession(!!localStorage.getItem('session'))
    if(!localStorage.getItem('session')){
      router.push('/login');
    }
  },[])
  return (
  session && <AppRootLayout><p className="font-mono">Welcome ...</p></AppRootLayout>
)
}

export default AppLayout