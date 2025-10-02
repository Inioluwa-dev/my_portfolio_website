import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Olayoriju Inioluwa | Mr Heritage - Full Stack Developer",
  description = "Full Stack Developer specializing in Python/Django backend development and modern frontend technologies. Explore my portfolio, projects, and services.",
  keywords = "Olayoriju Inioluwa, Inioluwa, inioluwa_dev, Comibyte, Olayoriju, Mr Heritage, Full Stack Developer, Python, Django, React, Backend Developer, Portfolio, Web Development, Lagos Nigeria",
  image = "/Mr Heritage Profile.png",
  url = "https://mr-heritage.name.ng",
  type = "website",
  structuredData = null,
  canonical = null,
  noindex = false,
  nofollow = false
}) => {
  const fullTitle = title.includes("Mr Heritage") ? title : `${title} | Mr Heritage Portfolio`;
  const fullUrl = canonical || url;
  const fullImage = image.startsWith('http') ? image : `${url}${image}`;

  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  if (!noindex && !nofollow) robotsContent.push('index', 'follow');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Olayoriju Inioluwa (Mr Heritage)" />
      <meta name="robots" content={robotsContent.join(', ')} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="Mr Heritage Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:creator" content="@Inioluwa-dev" />
      <meta name="twitter:site" content="@Inioluwa-dev" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#181818" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Name variations for better searchability */}
      <meta name="alternate-name" content="Inioluwa" />
      <meta name="alternate-name" content="inioluwa_dev" />
      <meta name="alternate-name" content="Comibyte" />
      <meta name="alternate-name" content="Olayoriju" />
      <meta name="nickname" content="Mr Heritage" />
      <meta name="nickname" content="Inioluwa" />
      <meta name="nickname" content="inioluwa_dev" />

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/Mr Heritage Profile.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/Mr Heritage Profile.png" />
      <link rel="apple-touch-icon" href="/Mr Heritage Profile.png" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
