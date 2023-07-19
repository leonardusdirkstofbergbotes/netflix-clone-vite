import { searchTmdb, tmdb, tmdbPaths } from '../../utils/tmdb';
import { IShow } from '../interfaces/IShow';
import { IMovie } from './../interfaces/IMovie';

export const tmdbModule = {
  state() {
    return {
      shows: {} as Record<string, (IMovie | IShow)[]>,
      searchedShows: <(IMovie | IShow)[]  | undefined> undefined
    };
  },

  mutations: {
    setShows(state: any, shows: Record<string, (IMovie | IShow)[]>) {
      const currentShows: Record<string, (IMovie | IShow)[]> = state.shows;
      Object.assign(currentShows, shows);
      state.shows = currentShows;
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
        const catogoriesToFetch: string[] = ['fetchTrending','fetchTopRated','fetchActionMovies','fetchComedyMovies','fetchHorrorMovies','fetchRomanceMovies','fetchMystery','fetchSciFi','fetchWestern','fetchAnimation'];
        catogoriesToFetch.forEach((category: string) => {
          tmdb(tmdbPaths[category])
            .then(res => res.json())
            .then((data: any) => {
              const showType = category.replace('fetch', '');
              commit('setShows', {
                [showType]: data.results as (IMovie | IShow)[]
              });
            })
            .catch((err) => console.log(err))
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
