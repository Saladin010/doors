import { useEffect } from "react";
import ImageCatalogPage from "@/components/ImageCatalogPage";
import SEO from "@/components/SEO";

const DOOR_IMAGES = Array.from({ length: 42 }, (_, i) => `/doors/door-${i + 1}.jpeg`);

export default function Doors() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'doors_page_view' });
  }, []);

  return (
    <>
      <SEO 
        title="كتالوج أبواب مقاومة للحريق والطوارئ" 
        description="تصفح مجموعة متكاملة من أبواب الطوارئ والأبواب المقاومة للحريق، مصنعة بأعلى معايير الجودة العالمية لتلبية احتياجات مشاريعك."
        canonical="/doors"
      />
      <ImageCatalogPage
        title="كتالوج الأبواب"
        description="مجموعة متكاملة من أبواب الطوارئ والأبواب المقاومة للحريق، مصنعة بأعلى معايير الجودة العالمية لتلبية كافة احتياجات مشاريعك."
        images={DOOR_IMAGES}
        imageAltPrefix="أبواب مقاومة للحريق"
      />
    </>
  );
}
