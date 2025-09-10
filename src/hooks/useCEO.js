import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

/**
 * هوک مدیریت SEO برای صفحات مختلف
 * توسعه داده شده توسط shahbazi.georgia@gmail.com
 */

const useSEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const defaultTitle = 'هتل آپارتمان لوکس - اقامتی به یاد ماندنی';
  const defaultDescription = 'هتل آپارتمان لوکس با بهترین امکانات و خدمات در قلب تهران. رزرو آنلاین با تضمین بهترین قیمت.';
  const defaultImage = '/images/og-image.jpg';
  const siteUrl = 'https://luxury-hotel.com';

  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image || defaultImage;
  const metaUrl = url || siteUrl;

  useEffect(() => {
    // به‌روزرسانی title
    document.title = metaTitle;

    // به‌روزرسانی meta tags
    const updateMetaTag = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    const updatePropertyTag = (property, content) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', metaDescription);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Open Graph
    updatePropertyTag('og:title', metaTitle);
    updatePropertyTag('og:description', metaDescription);
    updatePropertyTag('og:image', metaImage);
    updatePropertyTag('og:url', metaUrl);
    updatePropertyTag('og:type', type);
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', metaTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', metaImage);

  }, [metaTitle, metaDescription, metaImage, metaUrl, type, keywords]);

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="shahbazi.georgia@gmail.com" />
    </Helmet>
  );
};

export default useSEO;
