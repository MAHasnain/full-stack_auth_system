"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // axios
  const router = useRouter();

  const signup = async () => {};

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center py-2 bg-cyan-950 text-white">
        <div>
          <h2 className="text-3xl py-4">Signup</h2>
        </div>

        <form action="" method="post" className="">
          <div>
            <label htmlFor="username">Username</label>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter your username"
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>
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
              onClick={signup}
              className="p-2 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg"
            >
              Signup
            </button>
          </div>
        </form>
        <p>
          Already have an account ? <Link href={"/login"}>login here</Link>
        </p>
      </main>
    </>
  );
};

export default SignupPage;
