import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { AddOnReducer } from "../Reducers/AddOnReducer";
import { CarReducer } from "../Reducers/CarReducer";
import { OrderReducer } from "../Reducers/OrderReducer";
import { TotalReducer } from "../Reducers/TotalReducer";
import { UserReducer } from "../Reducers/UserReducer";
import { WashReducer } from "../Reducers/WashPackReducer";

export default configureStore({
  reducer: {
    user: UserReducer,
    washpack: WashReducer,
    addonpack: AddOnReducer,
    carpack: CarReducer,
    total: TotalReducer,
    orderpack: OrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk).concat(logger),
  devTools: [composeWithDevTools],
});
