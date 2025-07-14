// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

   return (

            <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className=" px-3 py-2 rounded flex items-center justify-center">
                <img src="/src/assets/logo.svg" alt="Logo" className="h-20" />
              {/* <span className="text-black font-bold text-xl"></span> */}
              <span className="text-white font-semibold ml-1 text-lg">QASCADE</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors text-sm">
              About
            </Link>
            <Link to="/blueprint" className="text-white hover:text-gray-300 transition-colors text-sm">
              Blueprint
            </Link>
            <Link to="/research" className="text-white hover:text-gray-300 transition-colors text-sm">
              Research
            </Link>
            <Link to="/careers" className="text-white hover:text-gray-300 transition-colors text-sm">
              Careers
            </Link>
            <Link to="/news" className="text-white hover:text-gray-300 transition-colors text-sm">
              News
            </Link>
          </div>
        </nav>
      </header>
//     <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <img src="/src/assets/logo.jpg" alt="Qascade Logo" className="h-8
//              w-auto" />
//             <span className="ml-3 text-xl font-bold text-qascade-primary dark:text-white">Qascade</span>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">Home</Link>
//             <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">About</Link>
//             <Link to="/technology" className="text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">Technology</Link>
//             <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">Contact</Link>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition"
//             >
//               {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition"
//             >
//               <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">Home</Link>
//             <Link to="/about" className="block text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">About</Link>
//             <Link to="/technology" className="block text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">Technology</Link>
//             <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition">Contact</Link>
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="block text-gray-700 dark:text-gray-300 hover:text-qascade-primary dark:hover:text-white transition"
//             >
//               {darkMode ? 'Light Mode' : 'Dark Mode'}
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
   );
  }
 export default Navbar;

