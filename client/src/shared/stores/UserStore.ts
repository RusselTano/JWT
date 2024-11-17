import { defineStore } from "pinia";
import type { User, SigninForm } from "../interface";
import { signin } from "../services";

interface UserState{
  currentUser: User | null;
  error: any;
}

export const useUser = defineStore('user', {
  state: (): UserState => ({
    currentUser: null,
    error: null,
  }),
  actions: {
    async signin(signinForm: SigninForm){
      // API call
      try {
        this.currentUser = await signin(signinForm);
        this.error = null;
      } catch (error) {
        this.error = error;
      }
    }
  },
});
