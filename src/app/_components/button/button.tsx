"use client";
import React, { forwardRef } from "react";
import { ButtonProps } from "./button.types";
import { LoadingIcon } from "../icons";

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, loading, color, bgColor, loadingColor, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled || loading}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: disabled ? "#ccc" : bgColor,
          color: color,
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled || loading ? "not-allowed" : "pointer",
          position: "relative",
        }}
        {...props}
      >
        {loading ? (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span>{children || "Loading..."}</span>
            <div style={{ width: "16px", height: "16px" }} className="animate-spin">
              <LoadingIcon fill={loadingColor}  />
            </div>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);
