"use client";

import { Montserrat } from "next/font/google";
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ActivitySquare } from "lucide-react";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between p-4 bg-transparent">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
        <ActivitySquare size={30} className="text-green-600"/>
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          AI Generate
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="bg-red-500 rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}