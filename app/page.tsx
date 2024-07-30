import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col md:mx-20">
      <Link
        href="/login"
        className="font-semibold leading-6 text-blue-600 hover:underline dark:text-[#2063EB]"
      >
        Sign in
      </Link>
    </div>
  );
};

export default page;
