import { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import bg from "../images/Shape.png";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "N9N2FNrtWhrVPSr0C";

const Login = () => {
  const navigate = useNavigate();
  const formRef = useRef();

  // Formik validation schema
  const validate = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: async (values, actions) => {
      try {
        await emailjs.sendForm(
          "service_jwb7x8t",
          "login_form",
          formRef.current,
          {
            publicKey: PUBLIC_KEY,
          }
        ); // Replace with your service and template IDs
        toast.success("Login details sent successfully!");
        navigate("/home");
      } catch (err) {
        toast.error("Failed to send login details.");
        console.error("EmailJS Error:", err);
      } finally {
        actions.setSubmitting(false);
        actions.resetForm();
      }
    },
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "cover",
        }}
      ></div>
      <div className="z-10 bg-white p-20 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-4xl text-gray-700 font-bold mb-2 text-center">
          Login to Account
        </h2>
        <p className="text-gray-600 text-center text-xl mb-6">
          Please enter your email and password to continue
        </p>

        <form
          onSubmit={formik.handleSubmit}
          ref={formRef}
          className="flex flex-col gap-8"
        >
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium text-2xl mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.email && formik.touched.email
                  ? " border-red-400"
                  : ""
              } w-full px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none placeholder:text-xl`}
              placeholder="Enter your email"
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-xl text-red-500">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-2xl mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.password && formik.touched.password
                  ? "border-red-400 focus:ring-red-400"
                  : ""
              } w-full px-4 py-3 text-2xl  rounded-lg bg-gray-50 focus:outline-none placeholder:text-xl`}
              placeholder="Enter your password"
            />
            {formik.errors.password && formik.touched.password && (
              <span className="text-xl text-red-500">
                {formik.errors.password}
              </span>
            )}

            <div className="flex justify-end mt-1">
              <Link to="#" className="text-xl text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className={`${
                formik.isSubmitting ? "opacity-70" : ""
              } w-3/4 flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300`}
            >
              {formik.isSubmitting ? "Submitting..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
