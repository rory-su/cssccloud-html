import {combineReducers} from 'redux-immutable';

import LoginReducer from '../views/LoginPage/store/reducer'

const reducer=combineReducers({
  login:LoginReducer
})

export default reducer;