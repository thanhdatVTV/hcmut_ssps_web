import axios from "../services/customize-axios";

const getPageSizeList = (keyword, pageNumber, perPage) => {
    return axios.get(`/api/PageSize/get-list-page-size?keyword=${keyword}&page=${pageNumber}&per_page=${perPage}`)
}

const createPageSize = (pageSizeName) => {
    return axios.post(`/api/PageSize/create-page-size?pageSizeName=${pageSizeName}`);
}

const updatePageSize = (id, pageSizeName) => {
    return axios.put(`/api/PageSize/update-page-size?id=${id}&pageSizeName=${pageSizeName}`);
}

const deletePageSize = (id) => {
    return axios.delete(`/api/PageSize/delete-page-size?id=${id}`);
}

export { getPageSizeList, createPageSize, updatePageSize, deletePageSize };