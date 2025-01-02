

const intialState = {
      
   adminEmail: "goradev66@gmail.com",
   adminPassword: "Vishal",

   isAuthenticated: false,

}


const adminSlice = createSlice({
   intialState,
   reducers: {
      localStorageSet: (state, action) => {
         state.isAuthenticated = action.payload.isAuthenticated;
         // localStorage.setItem("authenticated", JSON.stringify(action.payload.isAuthenticated));
          localStorage.setItem("authenticated", "admin")
      },
      
   }

   
})
// export const { localStorageSet } = adminSlice.actions;
// export default adminSlice.reducer;