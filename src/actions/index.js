const registrationUser = (formData) => {
    return {
        type: 'REGISTRATION_USER',
        payload: formData
    };
};

const updateRegistrationStatus = () => {
    return {
        type: 'UPDATE_REGISTRATION_STATUS',
    };
};

const loginUser = (formData) => {
    return {
        type: 'LOGIN_USER',
        payload: formData
    };
};

const logoutUser = () => {
    return {
        type: 'LOGOUT_USER',
    };
};

export { 
    registrationUser,
    updateRegistrationStatus,
    loginUser,
    logoutUser
};