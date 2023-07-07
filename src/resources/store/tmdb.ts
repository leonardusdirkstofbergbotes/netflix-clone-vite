import { searchTmdb, tmdb, tmdbPaths } from '../../utils/tmdb';
import { IShow } from '../interfaces/IShow';
import { IMovie } from './../interfaces/IMovie';

export const tmdbModule = {
  state() {
    return {
      shows: <(IMovie | IShow)[]> [],
      searchedShows: <(IMovie | IShow)[]  | undefined> undefined
    };
  },
  mutations: {
    setShows(state: any, shows: (IMovie | IShow)[]) {
      state.shows = shows;
    },

    setSearchedShows(state: any, shows: (IMovie | IShow)[]) {
      state.searchedShows = shows;
    },

    resetSearchedShows(state: any) {
      state.searchedShows = undefined;
    }
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
    },
    searchShows ({commit}, searchQuery: string) {
      searchTmdb(searchQuery).then(response => {
        if (response.ok) {
          response.json().then(data => {
            commit('setSearchedShows', data.results);
          });
        }
        else {
          console.error('searh shows encountered an error');
        }
      });
    }
  },
  getters: {
    getShows(state: any) {
      return state.shows;
    },
    getSearchedShows (state: any) {
      return state.searchedShows;
    }
  },
};
