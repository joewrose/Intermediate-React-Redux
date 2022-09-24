import { createStore } from "redux";
import reducer from "./reducers";

const store = createStore(
  reducer,
  // This activate the reduc dev tools. Just checks if the user has a browser
  // with the devtools installed. If not, return a function that does nothing.
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
