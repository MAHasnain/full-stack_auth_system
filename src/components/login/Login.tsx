"use client";

import axios from "axios";
import Link from "next/link";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import toast from "react-hot-toast";

const Login = () => {

  const router = useRouter();

  const login = async (user: { email: string; password: string }) => {
    
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("response => ", response);
      toast.success("Login Successful.");
      router.push("/")
      
    } catch (error: any) {
      console.error("Login failed, ", error.message);
      return error
     
    }
  };

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center py-2 bg-cyan-950 text-white">
        <div>
          <h2 className="text-3xl py-4">Login</h2>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email format")
              .required("Email is required"),
            password: Yup.string()
              .required("Password is required")
              .min(8, "Password must be at least 8 characters")
              .matches(/[a-zA-Z]/, "Password can only contain Latin letters"),
          })}
          onSubmit={(user) => {
            login(user);
          }}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form onSubmit={handleSubmit} className="">
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
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <p>
          Don&#39;t have an account ? <Link href={"/signup"}>Signup here</Link>
        </p>
      </main>
    </>
  );
};

export default Login;
