const initState = {
  users: [],
  registrationStatus: false,
  currentLoginedUser: [],
  loginStatus: false,
  loginError: false
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTRATION_USER":
      return registerUser(state, action);
    case "LOGIN_USER":
      return loginUser(state, action);
    case "UPDATE_REGISTRATION_STATUS":
      return {
        ...state,
        loginError: false,
        registrationStatus: false
      };
    default:
      return state;
  }
};

const registerUser = (state, action) => {
  const userData = action.payload;

  return {
    ...state,
    users: [...state.users, userData],
    registrationStatus: true
  };
};

const loginUser = (state, action) => {
  const { login, password } = action.payload;

  if (state.users.length === 0) {
    return {
      ...state,
      loginError: true
    };
  }

  let loginCandidate = null;

  state.users.map(item => {
    if (item.email === login && item.password === password) {
      loginCandidate = item;
    }
  });
  if (loginCandidate !== null) {
    return {
      ...state,
      loginError: false,
      loginStatus: true,
      currentLoginedUser: loginCandidate
    };
  } else {
    return {
      ...state,
      loginError: true
    };
  }
};

export default blogReducer;
