import { defineStore } from "pinia";
import type { User, SigninForm } from "../interface";
import { fecthCurrentUser, signin } from "../services";

interface UserState{
  currentUser: User | null;
  loaded: boolean;
}

export const useUser = defineStore('user', {
  state: (): UserState => ({
    currentUser: null,
    loaded: false,
  }),
  getters: {
    isLoggedIn(state): boolean | null {
      if (state.currentUser) {
        return true;
      }
      else if(!state.currentUser && state.loaded){
        return false;
      }
      else {
        return null;
      }
    }
  },
  actions: {
    async signin(signinForm: SigninForm){
      // API call
      try {
        this.currentUser = await signin(signinForm);
      } catch (error) {
        throw error;
      }
    },
    async fecthCurrentUser(){
      this.currentUser = await fecthCurrentUser();
      this.loaded = true;
    }
  },
});
