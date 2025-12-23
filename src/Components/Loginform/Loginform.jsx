// import { MdAlternateEmail } from "react-icons/md";
// import { FaFingerprint } from "react-icons/fa";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useState } from "react";
// import { BsApple } from "react-icons/bs";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa";

// const Loginform = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const togglePasswordView = () => setShowPassword(!showPassword);

//   return (
//     <>
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="w-[30%] max-w-sm h-[85%] md:max-w-sm lg:max-w-md p-3 bg-transparent flex-col flex items-center  rounded-xl shadow-slate-500 shadow-lg">
//         <img src='./logo5.png' alt="logo" className="w-32" />
//         <h1 className="text-lg md:text-lg mb-4 font-semibold">Login Page</h1>
      

//         <div className="w-full flex flex-col gap-3">
//           <div className="w-72  mx-auto flex items-center gap-2 bg-gray-800 p-2 rounded-xl">
//             <MdAlternateEmail />
//             <input
//               type="email"
//               placeholder="Email address"
//               className="bg-transparent border-0 w-full outline-none text-sm md:text-sm"
//             />
//           </div>

//           <div className="w-72 mx-auto flex items-center gap-1 bg-gray-800 p-2 rounded-xl relative">
//             <FaFingerprint />
//             <input
//               type={showPassword ? "password" : "text"}
//               placeholder="Password"
//               className="bg-transparent border-0 w-full outline-none text-sm md:text-sm"
//             />
//             {showPassword ? (
//               <FaRegEyeSlash
//                 className="absolute right-5 cursor-pointer"
//                 onClick={togglePasswordView}
//               />
//             ) : (
//               <FaRegEye
//                 className="absolute right-5 cursor-pointer"
//                 onClick={togglePasswordView}
//               />
//             )}
//           </div>
//         </div>

//         <button className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-blue-600 text-sm md:text-base">
//           Login
//         </button>

//         <div className="relative w-full flex items-center justify-center py-3">
//           <div className="w-2/5 h-[2px] bg-gray-800"></div>
//           <h3 className="font-lora text-xs md:text-sm px-4 text-gray-500">
//             Or
//           </h3>
//           <div className="w-2/5 h-[2px] bg-gray-800"></div>
//         </div>

//         <div className="w-full flex items-center justify-evenly md:justify-between gap-2">
//           <div className="p-2 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
//              <FaGoogle  className="text-lg md:text-xl"/>
//           </div>
          
//           <div className="p-2 md:px-6 lg:px-10 bg-slate-700 cursor-pointer rounded-xl hover:bg-slate-800">
//             <FaXTwitter className="text-lg md:text-xl" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   );
// };

// export default Loginform;
import React from 'react'
import {  FaLock } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";

const Loginform = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
<div className='flex w-[30%] h-[70%] flex-col border border-slate-500 bg-transparent  items-center gap-2 shadow-lg shadow-slate-500 rounded-lg'>
  <div>
    <img src='./logo5.png' alt="" className='w-28' />
  </div>
<div>
  Login Page
</div>
<div className="relative  mx-auto">
  <input
    type="text"
    placeholder="Email"
    className="
      peer  border-b border-gray-600 bg-transparent
      text-white pt-3 pb-1 pr-10 pl-1
      placeholder-transparent focus:outline-none
      focus:border-blue-400 transition-all duration-300
    "
  />

  <label
    className="
      absolute left-1 top-3
      text-gray-400 text-[8px]
      pointer-events-none
      transition-all duration-300

      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-sm

      peer-focus:top-0
      peer-focus:text-xs
      peer-focus:text-blue-300
       px-1
    "
  >
    Email
  </label>

  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
    <MdEmail />
  </span>
</div>
<div className="relative  mx-auto">
  <input
    type="password"
    placeholder="password"
    className="
      peer  border-b border-gray-600 bg-transparent
      text-white pt-3 pb-1 pr-10 pl-1
      placeholder-transparent focus:outline-none
      focus:border-blue-400 transition-all duration-300
    "
  />

  <label
    className="
      absolute left-1 top-3
      text-gray-400 text-[8px]
      pointer-events-none
      transition-all duration-300

      peer-placeholder-shown:top-3
      peer-placeholder-shown:text-sm

      peer-focus:top-0
      peer-focus:text-xs
      peer-focus:text-blue-300
       px-1
    "
  >
    Password
  </label>

  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
    <FaLock />
  </span>
</div>
<button className="w-full p-2 bg-blue-500 rounded-xl mt-3 hover:bg-amber-800 text-sm md:text-base">
          Login
        </button>


</div>
    </div>
  )
}

export default Loginform