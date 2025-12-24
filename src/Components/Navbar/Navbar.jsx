// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="w-full max-w-[600px] h-[60px] mt-7 rounded-xl py-1  items-center mx-auto flex justify-around bg-[#282C2D] border-gray-500 ">
//        <img src="/logo5.png" alt="Logo" className="w-32 " />

//       <ul className="flex gap-6 text-white">
//         <li>
//   <NavLink
//     to="/"
//     className={({ isActive }) =>
//       isActive ? 'text-orange-400 font-bold' : 'text-[#F8F9FA]'
//     }
//   >
//     Home
//   </NavLink>
// </li>

// <li>
//   <NavLink
//     to="/about"
//     className={({ isActive }) =>
//       isActive ? 'text-orange-400 font-bold' : 'text-[#F8F9FA]'
//     }
//   >
//     About
//   </NavLink>
// </li>

//         <li>
//   <NavLink
//     to="/projects"
//     className={({ isActive }) =>
//       isActive ? 'text-orange-400 font-bold' : 'text-[#F8F9FA]'
//     }
//   >
//     Projects
//   </NavLink>
// </li>
//         <li>
//   <NavLink
//     to="/contact"
//     className={({ isActive }) =>
//       isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA]'
//     }
//   >
//     Contact
//   </NavLink>
// </li>
// <button className='bg-orange-600 py-1 w-20 mx-auto rounded-lg'>donate</button>
//       </ul>

//     </nav>
//   );
// };

// export default Navbar;

// import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="w-full max-w-[600px] h-[60px] mt-7 rounded-xl py-1 items-center mx-auto flex justify-around  border-b border-[#2ECC71] shadow-md">
//       <img src="/logo5.png" alt="Logo" className="w-32" />

//       <ul className="flex gap-6 text-white">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
//             }
//           >
//             Home
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
//             }
//           >
//             About
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
//             }
//           >
//             Projects
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
//             }
//           >
//             Contact
//           </NavLink>
//         </li>

//         <button className="bg-[#F1C40F] hover:bg-[#6C5CE7] text-black font-semibold py-1 px-4 rounded-lg transition duration-300">
//           Donate
//         </button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// // src/components/Navbar.jsx
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav
//       className="
//         fixed top-4 left-1/2 z-50
//         flex h-14 w-[90%] max-w-5xl -translate-x-1/2 items-center
//         justify-between rounded-2xl border border-emerald-400/40
//         bg-slate-900/60 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.85)]
//         backdrop-blur-2xl
//       "
//     >
//       {/* Logo */}
//       <div className="flex items-center gap-2">
//         <img src="/logo5.png" alt="Logo" className="w-24 object-contain" />

//       </div>

//       {/* Links + Button */}
//       <ul className="flex items-center gap-6 text-sm text-slate-100">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `
//               relative px-1 py-1 text-xs font-medium uppercase tracking-[0.18em]
//               transition-colors duration-200
//               ${isActive ? "text-emerald-400" : "text-slate-200/80"}
//               group
//             `
//             }
//           >
//             Home
//             <span
//               className="
//                 pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0
//                 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400
//                 transition-all duration-300 group-hover:w-full
//               "
//             />
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               `
//               relative px-1 py-1 text-xs font-medium uppercase tracking-[0.18em]
//               transition-colors duration-200
//               ${isActive ? "text-emerald-400" : "text-slate-200/80"}
//               group
//             `
//             }
//           >
//             About
//             <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/projects"
//             className={({ isActive }) =>
//               `
//               relative px-1 py-1 text-xs font-medium uppercase tracking-[0.18em]
//               transition-colors duration-200
//               ${isActive ? "text-emerald-400" : "text-slate-200/80"}
//               group
//             `
//             }
//           >
//             Projects
//             <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
//           </NavLink>
//         </li>

//         <li className="hidden sm:block">
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               `
//               relative px-1 py-1 text-xs font-medium uppercase tracking-[0.18em]
//               transition-colors duration-200
//               ${isActive ? "text-emerald-400" : "text-slate-200/80"}
//               group
//             `
//             }
//           >
//             Contact
//             <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
//           </NavLink>
//         </li>

//         {/* Donate button */}
//         <button
//           className="
//             relative inline-flex items-center gap-2 rounded-full
//             bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400
//             px-4 py-1.5 text-xs font-semibold text-slate-900
//             shadow-[0_0_26px_rgba(34,197,94,0.8)]
//             transition-transform duration-200
//             hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(34,197,94,1)]
//           "
//         >
//           <span className="h-2 w-2 rounded-full bg-emerald-600 shadow-[0_0_10px_rgba(22,163,74,0.9)]" />
//           Donate
//         </button>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// const Navbar = () => {
//   const links = ["Home", "About", "Projects", "Contact"];

//   return (
//     <nav className="w-full flex justify-center mt-10">
//       <div className="flex items-center gap-12 px-12 py-6
//         bg-[#E9E6E2] rounded-full shadow-md">

//         {/* Logo */}
//         <div className="flex items-center gap-2 text-gray-700 font-bold">
//            <img src="/logo18.png" alt="Logo" className="w-24 object-contain" />

//         </div>

//         {/* Links */}
//         <ul className="flex gap-10">
//           {links.map((item, i) => (
//             <li
//               key={i}
//               className="relative h-6 overflow-hidden cursor-pointer group"
//             >
//               {/* Normal text */}
//               <span
//                 className="block text-gray-500
//                 transition-transform duration-300
//                 group-hover:-translate-y-6"
//               >
//                 {item}
//               </span>

//               {/* Hover text */}
//               <span
//                 className="absolute left-0 top-6 text-gray-900 font-medium
//                 transition-transform duration-300
//                 group-hover:-translate-y-6"
//               >
//                 {item}
//               </span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





//by my hand
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const links = ["Home", "About", "Projects", "Contact"];
//   return (
//     <nav className="w-full flex justify-center  ">
//       <div
//         className="  bg-[#0B1120] border border-[#14B8A6]/40
//     rounded-2xl mt-6 shadow-[0_18px_60px_rgba(0,0,0,0.9)]
//     backdrop-blur-2xl h-12 items-center ring-1 ring-[#14B8A6]/10 justify-center text-white flex gap-24 px-7 py-7  "
//       >
//         <img src="logo11.png" alt="" className="w-[58px] cursor-pointer " />
//         <div>
//           <ul className="flex gap-6 items-center">
//             {links.map((items, i) => (
//               <li key={i} className="group relative h-6 overflow-hidden cursor-pointer">
//                 <span className="block text-[#9CA3AF] text-sm tracking-wide transition-transform duration-300 group-hover:-translate-y-6 font-medium">
//                   {items}
//                 </span>
//                 <span className="block text-[#14B8A6] text-sm tracking-wide transition-transform duration-300 group-hover:-translate-y-6 font-medium">
//                   {items}
//                 </span>
//               </li>
//             ))}
//             <div className="relative inline-block group">
//               {/* Background layer jo slide karega */}
//               <span
//                 className="
//       absolute inset-0
//       origin-bottom
//       scale-y-0
//       bg-gradient-to-r from-[#22C55E] via-[#14B8A6] to-[#F59E0B]
//       rounded-lg
//       transition-transform duration-300 ease-out
//       group-hover:scale-y-100
//       group-hover:origin-bottom
      
      
//     "
//               />

//               {/* Actual button content (text) */}
//               <button
//                 className="
//       relative z-10
//       w-24 h-8
//       flex items-center justify-center
//       rounded-lg
//     text-[#E5E7EB]
//       overflow-hidden
//      transition-transform duration-300
//       group-hover:scale-100
//       border  border-[#14B8A6]/60
//       bg-transparent
//        text-sm font-medium
//       group-hover:text-slate-900
      
//     "
//               >
//                 Donate
//               </button>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-center fixed top-4 left-0 z-40">
      <div
        className="
          flex items-center gap-10
          px-6 md:px-8 py-3
          bg-[#0B1120]/95
          border border-[#14B8A6]/40
          rounded-2xl
          shadow-[0_18px_60px_rgba(0,0,0,0.9)]
          backdrop-blur-2xl
          ring-1 ring-[#14B8A6]/10
        "
      >
        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <img
            src="logo11.png"
            alt="Block Charity"
            className="w-[44px] h-[44px] cursor-pointer"
          />
          {/* <span className="hidden md:inline text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9CA3AF]">
            Verichain Nexus
          </span> */}
        </div>

        {/* Center links */}
        <ul className="hidden md:flex gap-7 items-center text-sm">
          {links.map((item) => (
            <li
              key={item.label}
              className="group relative h-6 overflow-hidden cursor-pointer"
            >
              {/* normal */}
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `
                  block text-sm tracking-wide font-medium
                  transition-transform duration-300
                  ${isActive ? "-translate-y-6 text-[#14B8A6]" : "text-[#9CA3AF] group-hover:-translate-y-6"}
                `
                }
              >
                {item.label}
              </NavLink>

              {/* hover / active top layer */}
              <span
                className="
                  pointer-events-none
                  absolute left-0 top-6
                  text-sm tracking-wide font-medium
                  text-[#14B8A6]
                  transition-transform duration-300
                  group-hover:-translate-y-6
                "
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Connect wallet placeholder
          <button
            className="
              hidden md:inline-flex items-center justify-center
              px-4 h-8 rounded-lg
              text-xs font-medium
              border border-[#14B8A6]/60
              text-[#E5E7EB]
              bg-[#020617]
              hover:bg-[#0B1120]
              transition-colors duration-200
              active:scale-95
            "
          >
            Connect Wallet
          </button> */}

          {/* Donate CTA */}
          <div className="relative inline-block group">
            <span
              className="
                absolute inset-0
                origin-bottom scale-y-0
                bg-gradient-to-r from-[#22C55E] via-[#14B8A6] to-[#F59E0B]
                rounded-lg
                transition-transform duration-300 ease-out
                group-hover:scale-y-100
              "
            />
            <button
              className="
                relative z-10
                w-24 h-8
                flex items-center justify-center
                rounded-lg
                text-[#E5E7EB]
                text-sm font-medium
                overflow-hidden
                bg-transparent
                border border-[#14B8A6]/60
                transition-transform duration-300
                group-hover:scale-105
                group-hover:text-slate-900
                active:scale-95
              "
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
