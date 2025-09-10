/**
 * ابزارهای کمکی برای مدیریت SEO
 * توسعه داده شده توسط shahbazi.georgia@gmail.com
 */

// تابع برای تولید structured data
export const generateStructuredData = (data) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    'name': data.name || 'هتل آپارتمان لوکس',
    'description': data.description || 'هتل آپارتمان لوکس با بهترین امکانات و خدمات در قلب تهران',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': data.address?.streetAddress || 'تهران، خیابان ولیعصر',
      'addressLocality': data.address?.addressLocality || 'تهران',
      'addressCountry': data.address?.addressCountry || 'IR'
    },
    'telephone': data.telephone || '+982112345678',
    'priceRange': data.priceRange || '$$',
    'amenities': data.amenities || [
      'وای-فای رایگان',
      'پارکینگ',
      'استخر',
      'رستوران'
    ],
    'checkinTime': data.checkinTime || '14:00',
    'checkoutTime': data.checkoutTime || '12:00'
  };
};

// تابع برای تولید structured data مخصوص اتاق
export const generateRoomStructuredData = (roomData) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    'name': roomData.name,
    'description': roomData.description,
    'occupancy': {
      '@type': 'QuantitativeValue',
      'maxValue': roomData.capacity
    },
    'amenities': roomData.amenities,
    'price': roomData.price,
    'priceCurrency': 'IRR'
  };
};

// تابع برای تولید breadcrumb structured data
export const generateBreadcrumbStructuredData = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};
