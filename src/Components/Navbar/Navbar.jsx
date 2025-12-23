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




import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full max-w-[600px] h-[60px] mt-7 rounded-xl py-1 items-center mx-auto flex justify-around bg-transparent border-b border-[#2ECC71] shadow-md">
      <img src="/logo5.png" alt="Logo" className="w-32" />

      <ul className="flex gap-6 text-white">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
            }
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
            }
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-[#E67E22] font-bold' : 'text-[#F8F9FA] hover:text-[#2ECC71] transition duration-300'
            }
          >
            Contact
          </NavLink>
        </li>

        <button className="bg-[#F1C40F] hover:bg-[#6C5CE7] text-black font-semibold py-1 px-4 rounded-lg transition duration-300">
          Donate
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;

