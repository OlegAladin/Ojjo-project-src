import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainCatalogButtonReducer from "./mainCatalogButtonReducer";
import thunk from "redux-thunk";
// import mainCatalogBlockReducer from "./mainCatalogBlockReducer";


const reducers = combineReducers({
    mainCatalogButton: mainCatalogButtonReducer,
    // mainCatalogBlock: mainCatalogBlockReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;