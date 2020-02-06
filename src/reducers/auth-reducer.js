const initState = {
  users: localStorage.getItem("registeredUsers") !== undefined && localStorage.getItem("registeredUsers") !== null ? JSON.parse(localStorage.getItem("registeredUsers")) : [],
  registrationStatus: false,
  currentLoginedUser: localStorage.getItem("currentLoginedUser") !== undefined && localStorage.getItem("currentLoginedUser") !== null ? JSON.parse(localStorage.getItem("currentLoginedUser")) : [],
  loginStatus: localStorage.getItem("loginStatus") !== undefined && localStorage.getItem("loginStatus") !== null ? JSON.parse(localStorage.getItem("loginStatus")) : false,
  loginError: false
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
      registrationStatus: false,
      currentLoginedUser: loginCandidate
    };
  } else {
    return {
      ...state,
      loginError: true
    };
  }
};

const authReducer = (state = initState, action) => {
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
    case "LOGOUT_USER":
      return {
        ...state,
        loginError: false,
        loginStatus: false,
        registrationStatus: false,
        currentLoginedUser: []
      };
    default:
      return state;
  }
};

export default authReducer;
