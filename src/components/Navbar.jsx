import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Left - Logo in glassmorphism box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Center - Navigation Links in glassmorphism box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-12 py-3">
            <div className="hidden md:flex items-center space-x-24">
              <a href="#" className="text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Home
              </a>
              <a href="#" className="text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Services
              </a>
              <a href="#" className="text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                About Us
              </a>
              <a href="#" className="text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Contact Us
              </a>
              <a href="#" className="text-lg text-black hover:text-blue-600 transition-colors duration-300 font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
                Packages
              </a>
            </div>
          </div>

          {/* Right - Booking Button in glassmorphism box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center space-x-2 hover:bg-white/20 transition-all duration-300">
            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span className="text-lg text-black font-medium" style={{fontFamily: "'Afacad', sans-serif"}}>
              Booking
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
