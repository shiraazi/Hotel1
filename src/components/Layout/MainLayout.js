import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import AdBanner from '../Shared/AdBanner';
import { useSEO } from '../../hooks/useSEO';

/**
 * کامپوننت布局 اصلی برنامه
 * شامل هدر، بنر تبلیغاتی، محتوای اصلی و فوتر
 * توسعه داده شده توسط shahbazi.georgia@gmail.com
 */

const MainLayout = ({ children, pageTitle, pageDescription }) => {
  // تنظیمات SEO
  useSEO({
    title: pageTitle,
    description: pageDescription
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <AdBanner />
      
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
      
      <Footer />
      
      {/* حق نشر */}
      <div className="bg-gray-800 text-white py-4 text-center text-sm">
        طراحی و توسعه توسط shahbazi.georgia@gmail.com - کلیه حقوق محفوظ است © {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default MainLayout;
