import { IProfile } from './../interfaces/IProfile';
import supabase from "../../utils/supabase";

export const profileModule = {
  state() {
    return {
      profilesAvailable: <IProfile[]> [],
      activeProfile: <IProfile | null> null
    };
  },
  mutations: {
    setAvaliableProfiles(state: any, profilesAvailable: IProfile[]) {
      state.profilesAvailable = profilesAvailable;
    },

    setActiveProfile(state: any, profile: IProfile) {
      state.activeProfile = profile;
    }
  },
  actions: {
    async fetchProfiles({commit, state}, userId: number) {
      if (state.profilesAvailable.length == 0) {
        let {data, error } = await supabase.from("Profiles").select("id, name").eq('user_id', userId);

        if (error == null) commit("setAvaliableProfiles", data);
      }
    },

    selectProfile ({commit}, profileSelected: IProfile) {
      commit('setActiveProfile', profileSelected);
    },
  },
  getters: {
    getProfilesAvailable(state: any) {
      return state.profilesAvailable;
    }
  },
};
