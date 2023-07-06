import { KEYS } from "./KEYS"

const headers = {
    'Authorization': `Bearer ${KEYS.TMDB_BEARER_TOKEN}`,
    'Content-Type': 'application/json'
}

export const tmdbPaths = {
    fetchTrending: `/trending/all/week?language=en-US`,
    fetchTopRated: `/movie/top_rated?language=en-US`,
    fetchActionMovies: `/discover/movie?with_genres=28`,
    fetchComedyMovies: `/discover/movie?with_genres=35`,
    fetchHorrorMovies: `/discover/movie?with_genres=27`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749`,
    fetchMystery: `/discover/movie?with_genres=9648`,
    fetchSciFi: `/discover/movie?with_genres=878`,
    fetchWestern: `/discover/movie?with_genres=37`,
    fetchAnimation: `/discover/movie?with_genres=16`,
    fetchTV: `/discover/movie?with_genres=10770`,
    search: '/search/multi'
}

export function tmdb (urlPath: string) {
    return fetch(`${KEYS.TMDB_BASE_URL}${urlPath}`, { 
        headers: headers 
    })
}

export function searchTmdb (query: string) {
    return tmdb(`${tmdbPaths.search}?language=en-US&query=${query}&page=1&include_adult=false`);
}
