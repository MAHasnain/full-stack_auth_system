"use client";

import axios from "axios";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const Signup = () => {
  const router = useRouter();

  const signup = async (user: {
    username: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log(response);
      router.push("/login");
    } catch (err: any) {
      console.log("Signup failed, ", err.message);
    }
  };

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center py-2 bg-cyan-950 text-white">
        <div>
          <h2 className="text-3xl py-4">Signup</h2>
        </div>

        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email format")
              .required("Email is required"),
            username: Yup.string()
              .min(8, "Must be at least 8 characters")
              .max(30, "Must be less than 30 characters")
              .required("Username is required")
              .matches(
                /^[a-zA-Z0-9]+$/,
                "Cannot contain special characters or spaces",
              ),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
          })}
          onSubmit={(user) => {
            signup(user);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="">
              <div>
                <label htmlFor="username">Username</label>
                <div>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                  />
                  {errors.username && touched.username && (
                    <p className="mb-1 text-red-500 text-sm">
                      {errors.username}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <div>
                  {/* <FastField name="" placeholder="" /> */}
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                  />
                  {errors.email && touched.email && (
                    <p className="mb-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <div>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:border-gray-600"
                  />
                  {errors.password && touched.password && (
                    <p className="mb-1 text-red-500 text-sm">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex justify-center text-white">
                <button
                  type="submit"
                  className="p-2 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-lg"
                >
                  Signup
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <p>
          Already have an account ? <Link href={"/login"}>login here</Link>
        </p>
      </main>
    </>
  );
};

export default Signup;
