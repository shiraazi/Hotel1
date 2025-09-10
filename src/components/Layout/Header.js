import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHotel, 
  FaUser, 
  FaPhoneAlt,
  FaCalendarAlt,
  FaUserCircle
} from 'react-icons/fa';

/**
 * کامپوننت هدر سایت با منوی همبرگری واکنشگرا
 * توسعه داده شده توسط shahbazi.georgia@gmail.com
 */

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const menuItems = [
    { name: 'اتاق‌ها', href: '/rooms', icon: FaHotel },
    { name: 'رزرواسیون', href: '/booking', icon: FaCalendarAlt },
    { name: 'درباره ما', href: '/about', icon: FaUser },
    { name: 'تماس', href: '/contact', icon: FaPhoneAlt }
  ];

  const userMenuItems = [
    { name: 'پروفایل', href: '/profile' },
    { name: 'رزروهای من', href: '/my-bookings' },
    { name: 'خروج', href: '/logout' }
  ];

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* لوگو */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center text-2xl font-bold text-blue-600"
            >
              <FaHotel className="ml-2" />
              <span>هتل آپارتمان لوکس</span>
            </motion.div>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {menuItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                <item.icon className="ml-2" />
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* بخش کاربر */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ورود / ثبت نام
            </motion.button>
            
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-gray-700"
              >
                <FaUserCircle className="text-2xl" />
              </motion.button>
              
              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {userMenuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* دکمه منوی موبایل */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* منوی موبایل */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-screen w-64 bg-white shadow-2xl md:hidden"
            >
              <div className="p-6">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-4 left-4 p-2"
                >
                  <FaTimes size={24} />
                </button>

                <div className="mt-12 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center text-gray-700 hover:text-blue-600 text-lg"
                    >
                      <item.icon className="ml-3" />
                      {item.name}
                    </motion.a>
                  ))}
                  
                  <div className="pt-4 border-t border-gray-200">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      ورود / ثبت نام
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
