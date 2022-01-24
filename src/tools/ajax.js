import axios from "axios";
const ajax = axios.create({
    withCredentials: true,
    headers: { crossDomain: true, 'Content-Type': 'application/json' },
});
export default ajax;
