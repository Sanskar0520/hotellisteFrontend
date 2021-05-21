import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookingDataReducer from "./bookingData/bookingDataReducers";
import inputDataReducer from "./inputData/inputDataReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["input"],
};

const appReducer = combineReducers({
  input: inputDataReducer,
  booking: bookingDataReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;