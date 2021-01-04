const getAuthenticated = (callback) => {
    wp.apiRequest({
        method: 'GET',
        path: 'digimon/v1/auth'
    }).then((response) => callback(response));
}

export {
    getAuthenticated,
};
