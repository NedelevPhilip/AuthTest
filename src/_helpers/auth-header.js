import { authenticationService } from '@/_services';

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = authenticationService.currentUserValue;
    if (currentUser && currentUser.jwtToken) {
        return { Authorization: `Bearer ${currentUser.jwtToken}` };
    } else {
        return {};
    }
}
