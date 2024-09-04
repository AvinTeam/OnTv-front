import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface User {
  avatar: any[];
  birthday: string;
  gender: number;
  id: number;
  limitsByServices: any[];
  mobile: string;
  name: string;
  permissions: string[];
  roles: string[];
  subscribe: number;
}

type UserState = {
  user: User | null;
  addUser: (user: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    devtools((set) => ({
      user: null,
      addUser: (user) => set(() => ({ user })),
      logout: () => {
        set({ user: null });
        localStorage.removeItem("onTv_user_token");
        localStorage.removeItem("onTv_user_data");
      },
    })),
    {
      name: "onTv-user-store-data",
    }
  )
);
