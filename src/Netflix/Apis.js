import axios from 'axios'
export const IMAGE_URl = 'https://image.tmdb.org/t/p/original'
export const API_KEY = 'ce48812700b8b5cef7520998ad99c2ff'
export const BASE_URL = 'https://api.themoviedb.org/3'
export const instance = axios.create({
    baseURL: BASE_URL,
});

export const Originals   = BASE_URL + `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const ComedyMovies = BASE_URL + `/discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies = BASE_URL + `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const ActionMovies = BASE_URL + `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const RomanceMovies = BASE_URL + `/discover/movie?api_key=${API_KEY}&with_genres=10749`