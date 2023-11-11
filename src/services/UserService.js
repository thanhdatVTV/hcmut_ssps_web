import axios from '../services/customize-axios';

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

export { fetchAllUser };