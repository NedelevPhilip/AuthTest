import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';
import {authenticationService} from "@/_services/authentication.service";

export const userService = {
    getAll
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader()
    };
    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}


