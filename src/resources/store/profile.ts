import { IProfile } from './../interfaces/IProfile';
import supabase from "../../utils/supabase";

export const profileModule = {
  state() {
    return {
      profilesAvailable: <IProfile[]> []
    };
  },
  mutations: {
    setAvaliableProfiles(state: any, profilesAvailable: IProfile[]) {
      state.profilesAvailable = profilesAvailable;
    },
  },
  actions: {
    async fetchProfiles({commit}, userId: number) {
      let {data, error } = await supabase.from("Profiles").select("id, name").eq('user_id', userId);

      if (error == null) commit("setAvaliableProfiles", data);
    },
  },
  getters: {
    getProfilesAvailable(state: any) {
      return state.profilesAvailable;
    },
  },
};
