const getAuthenticated = (callback) => {
    wp.apiRequest({
        method: 'GET',
        path: 'digimon/v1/auth'
    }).then((response) => callback(response));
};

const loginAuth = (callback, username, password) => {
    wp.apiRequest({
        method: 'POST',
        path: `digimon/v1/login?username=${username}&password=${password}`,
    }).then((response) => callback(response));
};

const logout = (callback) => {
    wp.apiRequest({
        method: 'POST',
        path: 'digimon/v1/logout',
    }).then((response) => callback(response));
};

export {
    getAuthenticated,
    loginAuth,
    logout,
};
