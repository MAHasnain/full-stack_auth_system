"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      console.log(res.data);
      setUser(res.data);
      // setData(res.data.result.username);
    } catch (error: any) {
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  if (loading) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-gray-500 text-2xl">Loading ...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-zinc-300">
        <div className="w-full max-w-md bg-zinc-30 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            My Profile
          </h2>
          <p className="text-sm text-gray-500 mb-6">Account information</p>

          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-500">Username</label>
              <div className="mt-1 p-2 rounded-md bg-zinc-200 text-black">
                {user?.data?.username}
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <div className="mt-1 p-2 rounded-md bg-zinc-200 text-black">
                {user?.data?.email}
              </div>
            </div>
          </div>
          <hr className="my-4" />

          <button
            onClick={logout}
            className="p-2 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
