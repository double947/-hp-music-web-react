import { combineReducers } from 'redux'


import { reducer as recommendReducer } from '../views/discover/c-pages/recommend/store'
const mergeReducer = combineReducers({
  recommend: recommendReducer
})

export default mergeReducer