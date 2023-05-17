import { composeWithDevTools } from "@redux-devtools/extension";
import axios from "axios";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const defaultState = {
  isRegistered: false,
  carListData: {},
};

export const fetchCarList = async (dispatch, getState) => {
  const carListData = await axios.get(
    "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"
  );

  dispatch({ type: "carList/carListFetch", payload: carListData.data });
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "root/isRegister": {
      return {
        ...state,
        isRegistered: !state.isRegistered,
      };
    }
    case "carList/carListFetch": {
      return {
        ...state,
        carListData: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

const storeConfig = { store, persistor };

export default storeConfig;
