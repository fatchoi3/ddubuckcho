import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import api from "../../api/api"


//actions
const LOGIN = "LOGIN";
const GET_USER = "GET_USER";
// const LOG_OUT = "LOG_OUT";
// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER"


//action creators
const login = createAction(LOGIN, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState
const initialState = {
    user: null,
    is_login: true,
    name: null,
    id_check: null,
    nick_check: null,
      
}


//middleware actions
const loginDB = (id, password) => {
    return function (dispatch, getState) {
        const data = {
            loginId: id,
            password: password,
        }
        dispatch(login(data.loginId));
        api.post('/login', data)
            .then((response) => {
                console.log(response);
                if (response.token) {
                    localStorage.setItem('token', response.token);
                    localStorage.setItem('name', response.name);
                    dispatch(login(response.name))
                }
            })
            //.catch((err) => {
            //    console.log(err);
           // }           )
    }
}
const signup = (loginId, password, passwordConfirm, name) => {
    return async function (dispatch, getState, { history }) {
      
      const userInfo = {
        loginId: loginId,
        password: password,
        confirmPassword: passwordConfirm,
        name: name,
      };
  
      await api
        .post("/signup", userInfo)
        .then(function (response) {
            console.log(response)
          history.push("/login");
        })
        //.catch((err) => {
          //window.alert("회원가입에 실패했어요😥");
        //});
    };
  };

//reducer
export default handleActions({
    [LOGIN]: (state, action) => produce(state, (draft) => {
        draft.name = action.payload.user
        console.log(action.payload.user)
    }),
},
    initialState
);

//action creator export
const actionCreators = {
    login,
    loginDB,
    getUser,
    signup
};

export { actionCreators }