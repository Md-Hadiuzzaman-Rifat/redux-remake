const { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require("../counter");
const dynamicCounterReducer = require("../dynamicCounter");
const { createLogger } = require("redux-logger");
const postReducer = require('../fetchPost')

const logger = createLogger();

const store = configureStore({
  reducer: {
    counterReducer: counterReducer,
    dynamicReducer: dynamicCounterReducer,
    post:postReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});

module.exports = store;
