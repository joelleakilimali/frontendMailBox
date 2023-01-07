import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="loader flex flex-row mt-10 pt-60 justify-center  align-middle border-gray-50 border-l-rose-300">
      <p className="mt-5 px-10 text-6xl">Please wait . . . </p>
      <div className="px-55">
        <FaSpinner size={80} className="spinner " />
      </div>
    </div>
  );
};

export default Loader;
