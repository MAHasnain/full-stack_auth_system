"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // axios
  const router = useRouter();

  const login = async () => {};

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center py-2 bg-cyan-950 text-white">
        <div>
          <h2 className="text-3xl py-4">Login</h2>
        </div>

        <form action="" method="post" className="">
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter your password"
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>

          <div className="flex justify-center text-white">
            <button
              type="submit"
              onClick={login}
              className="p-2 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
        <p>
          Don&#39;t have an account ? <Link href={"/signup"}>Signup here</Link>
        </p>
      </main>
    </>
  );
};

export default LoginPage;
