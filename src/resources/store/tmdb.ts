import { tmdb, tmdbPaths } from '../../utils/tmdb';
import { IMovie } from './../interfaces/IMovie';

export const tmdbModule = {
  state() {
    return {
      shows: <IMovie[]> []
    };
  },
  mutations: {
    setShows(state: any, shows: IMovie[]) {
      state.shows = shows;
    },
  },
  actions: {
    async fetchShows({commit, state}, userId: number) {
        tmdb(tmdbPaths.fetchTrending).then(response => response.json())
        .then((data: any) => {
          commit('setShows', data.results);
        });
    }
  },
  getters: {
    getShows(state: any) {
      return state.shows;
    },
  },
};
