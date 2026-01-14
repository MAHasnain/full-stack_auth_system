"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter()
  
  const logout = async  () => {
    
    try {
      await axios.get("/api/users/logout")
      router.push("/login");

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile</h1>

        <button onClick={logout} className="p-2 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg">
          Logout
        </button>
      </div>
    </>
  );
}
