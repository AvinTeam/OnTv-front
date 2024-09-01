"use client";
import React, { useEffect } from "react";
import { storeHistory } from "../_api/get-all-data";

function StoreHistory({ id }: { id: string }) {
  const isLoggedIn = () => {
    const token = localStorage.getItem("user_token");
    return !!token;
  };
  useEffect(() => {
    if (!isLoggedIn()) return;
    storeHistory(id);
  }, [id]);
  return <></>;
}

export default StoreHistory;
