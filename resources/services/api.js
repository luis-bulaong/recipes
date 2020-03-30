import axios from 'axios';
import apiConfig from '../config/api';

const apiHost = apiConfig.host;

export function getRecipes() {
    return axios.get(`${apiHost}/recipes`).then(function(response) {
        return response.data;
    });
}

export function getRecipeById(id) {
    return axios.get(`${apiHost}/recipes/${id}`).then(function(response) {
        return response.data;
    });
}

export function getSpecials() {
    return axios.get(`${apiHost}/specials`).then(function(response) {
        return response.data;
    });
}