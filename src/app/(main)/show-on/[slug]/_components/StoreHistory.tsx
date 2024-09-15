"use client";
import React, { useEffect } from "react";
import { storeHistory } from "../_api/get-all-data";
import { useUserStore } from "@/stores/user.store";

function StoreHistory({ id }: { id: string }) {
  const user = useUserStore((store) => store.user);

  useEffect(() => {
    if (!user) return;
    storeHistory(id);
  }, [id]);
  return <></>;
}

export default StoreHistory;
