"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="space-y-5 font-bold text-center text-white py-36">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>AI of Generation</h1>
        <div className="text-transparent bg-green-600 bg-clip-text">
          <TypewriterComponent
            options={{
              strings: [
                "Chat GPT",
                "Photo Generation",
                "Content Generation",
                "AI Assist"
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light md:text-xl text-zinc-400">
        Turn your ideas into reality
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="p-4 font-semibold rounded-full md:text-lg md:p-6">
            Generate for Free
          </Button>
        </Link>
      </div>
    </div>
  );
};
