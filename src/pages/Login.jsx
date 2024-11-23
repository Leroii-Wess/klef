// import usePasswordToggle from "../hooks/usePasswordToggle";
// import { useFormik } from "formik";
// import { useForm } from "@formspree/react";

// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import SpinnerMini from "../ui/SpinnerMini";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const [PasswordInputType, ToggleIcon] = usePasswordToggle();
//   const navigate = useNavigate();
//   const [state, handleSubmit] = useForm("xwpkqdob");
//   console.log(state);

//   // Validation for input data
//   const validate = Yup.object({
//     email: Yup.string()
//       .email("Please enter a valid email")
//       .required("Required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Required"),
//   });

//   // Form Submission
//   const handleFormSubmit = async (values, actions) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 3000));

//       if (state.succeeded) {
//         toast.success("Logged in successfully");
//         navigate("/home");
//       }

//       return;
//     } catch (err) {
//       toast.error("Wrong credentials, enter correct email and password");
//       console.log(err);
//     } finally {
//       actions.resetForm();
//     }
//   };

//   const { values, errors, touched, handleBlur, handleChange } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: validate,
//     onSubmit: handleFormSubmit,
//   });

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-blue-500">
//       <div
//         className={`absolute inset-0 bg-cover bg-center bg-[url("src/assets/Shape.png")]`}
//       ></div>
//       <div className="z-10 bg-white p-20 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-4">
//         <h2 className="text-4xl text-gray-700 font-bold mb-2 text-center">
//           Login to Account
//         </h2>
//         <p className="text-gray-600 text-center text-xl mb-6">
//           Please enter your email and password to continue
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           action="https://formspree.io/f/xwpkqdob"
//           method="POST"
//           className="flex flex-col gap-8"
//         >
//           {/* Email Input */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-medium text-2xl mb-1"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={`${
//                 errors.email && touched.email ? " border-red-400" : ""
//               } w-full px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none  placeholder:text-xl`}
//               placeholder="Enter your email"
//             />
//             {errors.email && touched.email && (
//               <span className="text-xl text-red-500">{errors.email}</span>
//             )}
//           </div>

//           {/* Password Input */}
//           <div className="relative">
//             <label
//               htmlFor="password"
//               className="block text-gray-700 font-medium text-2xl mb-1"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               name="password"
//               type={PasswordInputType}
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//               className={`${
//                 errors.password && touched.password
//                   ? "border-red-400 focus:ring-red-400"
//                   : ""
//               } w-full px-4 py-3 text-2xl  rounded-lg bg-gray-50 focus:outline-none  placeholder:text-xl`}
//               placeholder="Enter your password"
//             />

//             <span
//               className={`${
//                 errors.password && touched.password ? "bottom-[5.4rem]" : ""
//               } absolute right-4 bottom-12 flex items-center cursor-pointer text-2xl`}
//             >
//               {ToggleIcon}
//             </span>

//             {errors.password && touched.password && (
//               <span className="text-xl text-red-500">{errors.password}</span>
//             )}

//             <div className="flex justify-end mt-1">
//               <Link to="#" className="text-xl text-blue-500 hover:underline">
//                 Forgot Password?
//               </Link>
//             </div>
//           </div>

//           {/* Login Button */}
//           <div className="flex items-center justify-center">
//             <button
//               type="submit"
//               disabled={state.submitting}
//               className={`${
//                 state.submitting ? "opacity-70" : ""
//               } w-3/4 flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300`}
//             >
//               {state.submitting ? <SpinnerMini /> : "Sign In"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import usePasswordToggle from "../hooks/usePasswordToggle";
import { useFormik } from "formik";
import { useForm } from "@formspree/react";

import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import SpinnerMini from "../ui/SpinnerMini";
import { Link } from "react-router-dom";

const Login = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("xwpkqdob");

  // Validation for input data
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
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulating delay

        await handleSubmit({
          data: {
            email: values.email,
            password: values.password,
          },
        });

        toast.success("Logged in successfully");
        navigate("/home");
      } catch (err) {
        toast.error("Something went wrong");
        console.error(err);
      } finally {
        actions.setSubmitting(false);
        actions.resetForm();
      }
    },
  });

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500">
      <div className="absolute inset-0 login-background"></div>
      <div className="z-10 bg-white p-20 rounded-2xl shadow-lg w-full max-w-2xl flex flex-col gap-4">
        <h2 className="text-4xl text-gray-700 font-bold mb-2 text-center">
          Login to Account
        </h2>
        <p className="text-gray-600 text-center text-xl mb-6">
          Please enter your email and password to continue
        </p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
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
              } w-full px-4 py-3 text-2xl rounded-lg bg-gray-50 focus:outline-none  placeholder:text-xl`}
              placeholder="Enter your email"
            />
            {formik.errors.email && formik.touched.email && (
              <span className="text-xl text-red-500">
                {formik.errors.email}
              </span>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium text-2xl mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type={PasswordInputType}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${
                formik.errors.password && formik.touched.password
                  ? "border-red-400 focus:ring-red-400"
                  : ""
              } w-full px-4 py-3 text-2xl  rounded-lg bg-gray-50 focus:outline-none  placeholder:text-xl`}
              placeholder="Enter your password"
            />

            <span className="absolute right-4 bottom-12 flex items-center cursor-pointer text-2xl">
              {ToggleIcon}
            </span>

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
              disabled={formik.isSubmitting || state.submitting}
              className={`${
                formik.isSubmitting || state.submitting ? "opacity-70" : ""
              } w-3/4 flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300`}
            >
              {formik.isSubmitting || state.submitting ? (
                <SpinnerMini />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
