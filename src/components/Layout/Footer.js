import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin,
  FaHotel,
  FaWifi,
  FaParking,
  FaSwimmingPool,
  FaUtensils
} from 'react-icons/fa';

/**
 * کامپوننت فوتر سایت با اطلاعات تماس و لینک‌های مفید
 * توسعه داده شده توسط shahbazi.georgia@gmail.com
 */

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const amenities = [
    { icon: FaWifi, text: "وای‌فای رایگان" },
    { icon: FaParking, text: "پارکینگ" },
    { icon: FaSwimmingPool, text: "استخر" },
    { icon: FaUtensils, text: "رستوران" }
  ];

  const quickLinks = [
    { name: "اتاق‌ها و امکانات", href: "/rooms" },
    { name: "رزرو آنلاین", href: "/booking" },
    { name: "پکیج‌های ویژه", href: "/packages" },
    { name: "گالری تصاویر", href: "/gallery" },
    { name: "وبلاگ", href: "/blog" }
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "تهران، خیابان ولیعصر، پلاک ۱۲۳۴" },
    { icon: FaPhone, text: "۰۲۱-۱۲۳۴۵۶۷۸" },
    { icon: FaEnvelope, text: "info@luxuryhotel.com" }
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:text-blue-600" },
    { icon: FaInstagram, href: "#", color: "hover:text-pink-600" },
    { icon: FaTwitter, href: "#", color: "hover:text-blue-400" },
    { icon: FaLinkedin, href: "#", color: "hover:text-blue-700" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* بخش برند و امکانات */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <FaHotel className="text-2xl text-blue-400 ml-2" />
              <h3 className="text-2xl font-bold">هتل آپارتمان لوکس</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              میزبانی بی‌نظیر با بهترین خدمات و امکانات برای اقامتی به یاد ماندنی در قلب شهر
            </p>
            <div className="space-y-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <amenity.icon className="ml-2 text-blue-400" />
                  <span>{amenity.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* لینک‌های سریع */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-blue-400">
              دسترسی سریع
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <FaHotel className="ml-2 text-sm" />
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* اطلاعات تماس */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-blue-400">
              ارتباط با ما
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <info.icon className="ml-2 mt-1 text-blue-400 flex-shrink-0" />
                  <span>{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* شبکه‌های اجتماعی */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:right-0 after:w-12 after:h-0.5 after:bg-blue-400">
              ما را دنبال کنید
            </h4>
            <div className="flex space-x-4 space-x-reverse mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transition-colors ${social.color}`}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            
            {/* خبرنامه */}
            <div>
              <h5 className="text-sm font-semibold mb-3">عضویت در خبرنامه</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-l-lg hover:bg-blue-600 transition-colors"
                >
                  ارسال
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} هتل آپارتمان لوکس. طراحی و توسعه توسط shahbazi.georgia@gmail.com
            </motion.p>
            <div className="flex space-x-6 space-x-reverse">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                حریم خصوصی
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                شرایط استفاده
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/sitemap"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                نقشه سایت
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
