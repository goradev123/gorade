

const intialState = {
      
   adminEmail: "pkakde7972@gmail.com",
   adminPassword: "1212",

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