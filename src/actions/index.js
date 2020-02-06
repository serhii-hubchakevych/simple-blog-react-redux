const registrationUser = formData => {
  return {
    type: "REGISTRATION_USER",
    payload: formData
  };
};

const updateRegistrationStatus = () => {
  return {
    type: "UPDATE_REGISTRATION_STATUS"
  };
};

const loginUser = formData => {
  return {
    type: "LOGIN_USER",
    payload: formData
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT_USER"
  };
};

const createPost = (formData, username) => {
  formData.user = username.firstname;
  return {
    type: "CREATE_POST",
    payload: formData
  };
};

const resetPublishStatus = () => {
  return {
    type: "RESET_PUBLISH_STATUS"
  };
};

export {
  registrationUser,
  updateRegistrationStatus,
  loginUser,
  logoutUser,
  createPost,
  resetPublishStatus
};
