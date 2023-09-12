const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require("../counter");
const dynamicCounterReducer = require("../dynamicCounter");
const { createLogger } = require("redux-logger");

const logger = createLogger();

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    dynamicReducer: dynamicCounterReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});

module.exports = store;
