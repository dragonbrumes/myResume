import { createStore, compose, applyMiddleware } from "redux";

import reducer from "./reducer";
import temp from "./middlewares/temp";

const devTools = [];
if (window.devToolsExtension) {
  // On configure l'extension Redux pour Chrome/Firefox.
  devTools.push(window.devToolsExtension());
}

const tempMW = applyMiddleware(temp);

const enhancers = compose(
  tempMW,
  ...devTools
);

const store = createStore(reducer, enhancers);

export default store;
