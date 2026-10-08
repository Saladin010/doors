import HeroCutaway from "@/components/HeroCutaway";
import SystemsReadout from "@/components/SystemsReadout";
import ProductionLine from "@/components/ProductionLine";
import ProductCatalog from "@/components/ProductCatalog";
import Certifications from "@/components/Certifications";
import Deployments from "@/components/Deployments";
import QuoteRequest from "@/components/QuoteRequest";
import Closing from "@/components/Closing";
import Features from "@/components/Features";
import SEO from "@/components/SEO";
import { contact } from "@/lib/data";

export default function Home() {
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "شركة سمارت لتصنيع ابواب الطوارئ",
    "image": "https://smartdoors-egp.com/logo.jpg",
    "@id": "https://smartdoors-egp.com/",
    "url": "https://smartdoors-egp.com/",
    "telephone": contact.phone,
    "email": contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": contact.address,
      "addressCountry": "EG"
    }
  });

  return (
    <main>
      <SEO 
        title="الرئيسية" 
        description="تُعد شركة سمارت لتصنيع ابواب الطوارئ من الشركات الرائدة في تصنيع وتوريد وتركيب الأبواب المقاومة للحريق وأبواب الطوارئ، حيث تقدم منتجات عالية الجودة وفق أحدث معايير السلامة والأمان لتلبية احتياجات المشروعات السكنية والتجارية والصناعية."
        canonical="/"
        schema={schema}
      />
      <HeroCutaway />
      <SystemsReadout />
      <Features />
      <ProductionLine />
      <ProductCatalog />
      <Certifications />
      <Deployments />
      <QuoteRequest />
      <Closing />
    </main>
  );
}
