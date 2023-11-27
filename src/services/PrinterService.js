import axios from "../services/customize-axios";

const getPrinterList = (keyword, pageNumber, perPage) => {
    return axios.get(`/api/Printer/get-list-printer?keyword=${keyword}&page=${pageNumber}&per_page=${perPage}`)
}

const createPrinter = (brand, printerModel, description) => {
    return axios.post(`/api/Printer/create-printer?brand=${brand}&printerModel=${printerModel}&description=${description}`);
}

const updatePrinter = (id, brand, printerModel, description) => {
    return axios.put(`/api/Printer/update-printer?id=${id}&brand=${brand}&printerModel=${printerModel}&description=${description}`);
}

const deletePrinter = (id) => {
    return axios.delete(`/api/Printer/delete-printer?id=${id}`);
}

export { getPrinterList, createPrinter, updatePrinter, deletePrinter };