import axios from "axios";

const apis =  axios.create({
    //baseURL: "http://localhost:3003/"
    baseURL: "http://52.78.40.38/"
    //baseURL: "http://3.35.140.5/api/auth/userid"
    // baseURL: "http://3.35.140.5/api/item"

    // baseURL: "http://3.35.140.5"
})

export default apis;