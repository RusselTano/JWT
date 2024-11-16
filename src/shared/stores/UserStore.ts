import { defineStore } from "pinia";
import type { User } from "../interface";

interface UserState{
  currentUser: User | null;
}

export const useUser = defineStore('user', {
  state: (): UserState => ({
    currentUser: null,
  }),
});
