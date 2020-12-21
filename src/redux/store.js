import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'
import collapseReducer from './reducers/collapseReducer'
import rightListReducer from './reducers/rightListReducer'
import roleListReducer from './reducers/roleListReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage
}
const reducer = combineReducers({
  iscollapsed: collapseReducer,
  roleList: roleListReducer,
  rightList: rightListReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
const componswEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// createStore创建一个store
const store = createStore(persistedReducer, componswEnhancer(applyMiddleware(reduxPromise, reduxThunk)))
const myPersistStore = persistStore(store) // 持久化的store  会将store的数据存储到localstorage
export {
  store,
  myPersistStore
}