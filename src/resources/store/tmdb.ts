import { tmdb, tmdbPaths } from '../../utils/tmdb';
import { IShow } from '../interfaces/IShow';
import { IMovie } from './../interfaces/IMovie';

export const tmdbModule = {
  state() {
    return {
      shows: <(IMovie | IShow)[]> []
    };
  },
  mutations: {
    setShows(state: any, shows: (IMovie | IShow)[]) {
      state.shows = shows;
    },
  },
  actions: {
    fetchShows({commit, state}, userId: number) {
        tmdb(tmdbPaths.fetchTrending).then(response => response.json())
        .then((data: any) => {
          commit('setShows', data.results);
        });

        tmdb(tmdbPaths.fetchHorrorMovies).then(response => response.json())
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
