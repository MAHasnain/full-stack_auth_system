"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const verifyEmailPage = () => {
  const [error, setError] = useState(false);
  const [Verified, setVerified] = useState(false);
  const [token, setToken] = useState("");

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div>
      <h1>Verify Email</h1>
      <h2>{token ? `${token}` : "no token"}</h2>
      <div>
        {Verified && (
          <div>
            <h2>Email Verified</h2>
            <Link href="/login">Login</Link>
          </div>
        )}
        {error && (
          <div>
            <h2>Error</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default verifyEmailPage;
