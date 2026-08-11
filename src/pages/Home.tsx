import HeroCutaway from "@/components/HeroCutaway";
import SystemsReadout from "@/components/SystemsReadout";
import ProductionLine from "@/components/ProductionLine";
import ProductCatalog from "@/components/ProductCatalog";
import Certifications from "@/components/Certifications";
import Deployments from "@/components/Deployments";
import QuoteRequest from "@/components/QuoteRequest";
import Closing from "@/components/Closing";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
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
