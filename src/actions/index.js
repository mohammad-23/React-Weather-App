import axios from 'axios';

const API_KEY = '25720f99d21c0647d653ed745858978e';
const rootUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${rootUrl}&q=${city},in`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}