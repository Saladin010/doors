import { useEffect } from "react";
import ImageCatalogPage from "@/components/ImageCatalogPage";
import { accessories } from "@/lib/data";

export default function Accessories() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'accessories_page_view' });
  }, []);

  return (
    <ImageCatalogPage
      title="الإكسسوارات"
      description="مجموعة متنوعة من الإكسسوارات عالية الجودة المصممة خصيصاً لأبواب الطوارئ والأبواب المقاومة للحريق لتوفير أقصى درجات الأمان والمتانة."
      images={accessories}
    />
  );
}
