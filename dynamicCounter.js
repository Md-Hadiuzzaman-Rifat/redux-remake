const { createSlice } = require("@reduxjs/toolkit");
const {counterAction} =require('./counter')

const initialState = {
  count: 10,
};

const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    dynamicIncrement: (state) => {
      state.count++;
    },
    dynamicDecrement: (state) => {
      state.count--;
    },
  },
//   extraReducers:{
//     ['counter/increment']:(state,action)=>{
//         state.count ++
//     }
//   }
  extraReducers:(builder)=>builder.addCase(counterAction.increment,(state,action)=>{
    state.count++
  })
});

module.exports = dynamicCounterSlice.reducer;
module.exports.dynamicCounterAction = dynamicCounterSlice.actions;
