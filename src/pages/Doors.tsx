import { useEffect } from "react";
import ImageCatalogPage from "@/components/ImageCatalogPage";

const DOOR_IMAGES = Array.from({ length: 42 }, (_, i) => `/doors/door-${i + 1}.jpeg`);

export default function Doors() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'doors_page_view' });
  }, []);

  return (
    <ImageCatalogPage
      title="كتالوج الأبواب"
      description="مجموعة متكاملة من أبواب الطوارئ والأبواب المقاومة للحريق، مصنعة بأعلى معايير الجودة العالمية لتلبية كافة احتياجات مشاريعك."
      images={DOOR_IMAGES}
    />
  );
}
