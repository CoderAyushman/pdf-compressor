import axios from "axios";

export default axios.create({
    baseURL:'https://api.pdfrest.com',
    headers:{"Api-Key":"c58f69fc-6984-421e-ada9-a6edf5970f94"}
});