import { apiConnector } from "../apiConnector.js";
import { Auth } from "../apis.js";


class Authentication {

    async login(email, password) {

        const body = {
            email: email,
            password: password
        }

        const response = await apiConnector("POST", Auth.LOGIN_API, body);

        return response;
    }


    async register(formData) {
        console.log(formData);

        const body = formData;

        const response = await apiConnector("POST", Auth.REGISTER_API, body);

        return response;

    }


}


const authentication = new Authentication();

export default authentication;