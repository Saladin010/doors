import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: string;
  noindex?: boolean;
  image?: string;
}

export default function SEO({ title, description, canonical, schema, noindex, image = "https://smartdoors-egp.com/logo.jpg" }: SEOProps) {
  const fullTitle = `${title} | Smart Doors`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={`https://smartdoors-egp.com${canonical}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={`https://smartdoors-egp.com${canonical}`} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {schema && <script type="application/ld+json">{schema}</script>}
    </Helmet>
  );
}
