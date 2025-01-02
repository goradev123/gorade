import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const UserLogin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const realEmail = "goradev66@gmail.com";
   const realPassword = "Vishal";

   const handleSubmit = (e) => {
         e.preventDefault();
         
         if(email === realEmail && password === realPassword) {
            alert("User Login Successful");
            navigate("/user-dashboard");
            localStorage.setItem("user", "loggedIn");
         }
         else {
            toast.error("Invalid email or password");
         }
   };

   return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
         <ToastContainer />

         <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            User Login
         </h2>
         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
               <label
               htmlFor="email"
               className="block text-sm font-medium text-gray-700"
               >
               Email
               </label>
               <input
               type="email"
               id="email"
               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               placeholder="Enter your email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               />
            </div>
            {/* Password Input */}
            <div>
               <label
               htmlFor="password"
               className="block text-sm font-medium text-gray-700"
               >
               Password
               </label>
               <input
               type="password"
               id="password"
               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               />
            </div>
            {/* Test Credentials Button
            <div
               className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
               onClick={() => {setEmail("user@example.com"); setPassword("password123");}}
            >
               Use Test Credentials
            </div> */}
            {/* Submit Button */}
            <button
               type="submit"
               className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
               Login
            </button>
         </form>
         {/* Additional Options */}
         <p className="mt-6 text-sm text-center text-gray-600">
                 {/* Don't have an account?{" "} */}
            <a href="#" className="text-indigo-500 hover:underline">
               Sign up here
            </a>
         </p>
         </div>
      </div>
   );
};

export default UserLogin;
