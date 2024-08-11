"use client";
import { ToastContainer as Tost } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ToastContainer = () => {
  return (
    <Tost
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={true}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
