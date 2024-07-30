"use client";
import Link from "next/link";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { IoMdEye, IoMdEyeOff, IoMdLock } from "react-icons/io";
import Joi from 'joi';

export const addUserSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords do not match',
  }),
  firstName: Joi.string().required(),
  lastName: Joi.string().required()
});

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = (e: any) => {
    e.preventDefault();

    const { error } = addUserSchema.validate({
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
    });

    if (error) {
      alert(error.message);
      return;
    }

    // Handle sign-up logic here
  };

  return (
    <div className="flex items-center justify-center h-full py-24">
      <div className="p-6 sm:p-8 sm:pt-6 mt-4 w-full mx-2 sm:mx-0 max-w-[26rem] md:max-w-[31rem] dark:bg-gray-800 bg-white shadow-md rounded-md">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
            Sign up for FREE
          </h2>
        </div>
        <div className="mt-9 sm:mx-auto">
          <form className="space-y-6" onSubmit={handleSignup}>
            <div className="relative mt-2 w-full" style={{ marginBottom: "-10px" }}>
              <BiLogoGmail
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#2063EB]"
                size={24}
              />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Gmail"
                onChange={(e) => setEmail(e.target.value)}
                required
                className="outline-gray-200 pl-10 pr-12 py-3 w-full border border-gray-200 rounded-md sm:text-sm bg-white text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:outline-blue-500"
              />
            </div>

            <div className="relative mt-2 w-full" style={{ marginBottom: "-10px" }}>
              <IoMdLock
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#2063EB]"
                size={24}
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="outline-gray-200 pl-10 pr-12 py-3 w-full rounded-md border border-gray-200 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 sm:text-sm bg-white text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:outline-blue-500"
              />
              {showPassword ? (
                <IoMdEyeOff
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#2063EB] cursor-pointer"
                  size={24}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoMdEye
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#2063EB] cursor-pointer"
                  size={24}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>

            <div className="relative mt-2 w-full" style={{ marginBottom: "-10px" }}>
              <IoMdLock
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-[#2063EB]"
                size={24}
              />
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="outline-gray-200 pl-10 pr-12 py-3 w-full rounded-md border border-gray-200 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 sm:text-sm bg-white text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:outline-blue-500"
              />
              {showConfirmPassword ? (
                <IoMdEyeOff
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#2063EB] cursor-pointer"
                  size={24}
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <IoMdEye
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-[#2063EB] cursor-pointer"
                  size={24}
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </div>

            <div className="relative mt-2 w-full">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="outline-gray-200 pl-3 pr-3 py-3 w-full rounded-md border border-gray-200 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 sm:text-sm bg-white text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:outline-blue-500"
              />
            </div>

            <div className="relative mt-2 w-full">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="outline-gray-200 pl-3 pr-3 py-3 w-full rounded-md border border-gray-200 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 sm:text-sm bg-white text-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:outline-blue-500"
              />
            </div>

            <div className="relative mt-2 w-full">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          <div className="mt-5 text-center text-sm text-gray-500 dark:text-gray-300">
            Already have an account?
            <Link href="login">
              <div className="font-semibold leading-6 text-blue-600 hover:underline dark:text-[#2063EB]">
                Sign in
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
