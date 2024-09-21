import axios from "axios"

const REST_API_BASE_URL = "http://3.91.230.9:8080/project"

export const getHello = () => {
    return axios.get(REST_API_BASE_URL + "/hello");
}

export const getMetresToKms = (metres) => {
    return axios.get(`${REST_API_BASE_URL}/metreToKm/${metres}`);
};
  
export const getKmsToMetres = (kms) => {
    return axios.get(`${REST_API_BASE_URL}/kmToMetre/${kms}`);
};

export const getCmToInches = (cm) => {
    return axios.get(`${REST_API_BASE_URL}/cmToInch/${cm}`);
};
  
export const getInchToCm = (inch) => {
    return axios.get(`${REST_API_BASE_URL}/inchToCm/${inch}`);
};