"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex gap-15 min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className=" text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          Full Stack Auth System with
        </h1>
        <div className="flex items-center gap-6 text-center sm:items-start sm:text-left">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <p className="max-w-md text-lg leading-6 text-zinc-600 dark:text-zinc-400">
            and
          </p>
          <Image
            // className="dark:invert"
            src="/MongoDB_Logo.svg"
            alt="mdb logo"
            width={105}
            height={16}
            priority
          />
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center cursor-pointer justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="/profile"
            rel="noopener noreferrer"
          >
            Go to Profile
          </Link>
          <button
            className="flex h-12 w-full items-center cursor-pointer justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            onClick={logout}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
