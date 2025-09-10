import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

/**
 * کامپوننت بنر تبلیغاتی با قابلیت چرخش خودکار
 * توسعه داده شده توسط shahbazi.georgia@gmail.com
 */

const AdBanner = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [ads, setAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // داده‌های تبلیغات - در حالت واقعی از API دریافت می‌شود
  useEffect(() => {
    const mockAds = [
      {
        id: 1,
        title: "تخفیف ویژه تابستانه",
        description: "رزرو آنلاین با ۲۰٪ تخفیف در فصل تابستان",
        image: "/images/ads/summer-sale.jpg",
        link: "/offers/summer",
        backgroundColor: "bg-gradient-to-r from-blue-400 to-cyan-400",
        textColor: "text-white",
        isActive: true
      },
      {
        id: 2,
        title: "پکیج رومانس",
        description: "اتاق لوکس به همراه شام رمانتیک و نوشیدنی رایگان",
        image: "/images/ads/romance-package.jpg",
        link: "/packages/romance",
        backgroundColor: "bg-gradient-to-r from-rose-400 to-pink-400",
        textColor: "text-white",
        isActive: true
      },
      {
        id: 3,
        title: "رزرو گروهی",
        description: "تخفیف ویژه برای رزروهای گروهی بیشتر از ۵ نفر",
        image: "/images/ads/group-booking.jpg",
        link: "/group-booking",
        backgroundColor: "bg-gradient-to-r from-amber-400 to-orange-400",
        textColor: "text-gray-800",
        isActive: true
      }
    ];
    
    setAds(mockAds.filter(ad => ad.isActive));
    setIsLoading(false);

    // تغییر خودکار تبلیغات هر ۵ ثانیه
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        prevIndex === mockAds.filter(ad => ad.isActive).length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === ads.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevAd = () => {
    setCurrentAdIndex((prevIndex) => 
      prevIndex === 0 ? ads.length - 1 : prevIndex - 1
    );
  };

  const goToAd = (index) => {
    setCurrentAdIndex(index);
  };

  if (isLoading) {
    return (
      <div className="w-full h-20 bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-gray-500">در حال بارگذاری تبلیغات...</div>
      </div>
    );
  }

  if (ads.length === 0) {
    return null;
  }

  const currentAd = ads[currentAdIndex];

  return (
    <div className={`w-full ${currentAd.backgroundColor} py-3 relative overflow-hidden`}>
      <div className="container mx-auto px-4">
        <motion.div
          key={currentAd.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          {/* محتوای تبلیغ */}
          <div className="flex-1 text-center">
            <h3 className={`text-lg font-bold ${currentAd.textColor}`}>
              {currentAd.title}
            </h3>
            <p className={`text-sm ${currentAd.textColor}`}>
              {currentAd.description}
            </p>
          </div>

          {/* دکمه اقدام */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <motion.a
              href={currentAd.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg ${currentAd.textColor} bg-black bg-opacity-20 hover:bg-opacity-30 transition-all`}
            >
              مشاهده جزئیات
            </motion.a>
          </div>
        </motion.div>

        {/* کنترل‌های ناوبری */}
        {ads.length > 1 && (
          <div className="absolute inset-y-0 left-4 flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevAd}
              className={`p-1 rounded-full ${currentAd.textColor} bg-black bg-opacity-20 hover:bg-opacity-30`}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        )}

        {ads.length > 1 && (
          <div className="absolute inset-y-0 right-4 flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextAd}
              className={`p-1 rounded-full ${currentAd.textColor} bg-black bg-opacity-20 hover:bg-opacity-30`}
            >
              <FaChevronLeft />
            </motion.button>
          </div>
        )}

        {/* نشانگر صفحات */}
        {ads.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
            {ads.map((_, index) => (
              <button
                key={index}
                onClick={() => goToAd(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentAdIndex 
                    ? `${currentAd.textColor} bg-current scale-125` 
                    : `${currentAd.textColor} bg-current opacity-40`
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdBanner;
