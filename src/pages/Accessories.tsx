import { useEffect } from "react";
import ImageCatalogPage from "@/components/ImageCatalogPage";
import { accessories } from "@/lib/data";
import SEO from "@/components/SEO";

export default function Accessories() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'accessories_page_view' });
  }, []);

  return (
    <>
      <SEO 
        title="إكسسوارات أبواب الطوارئ" 
        description="مجموعة متنوعة من إكسسوارات أبواب الطوارئ والأبواب المقاومة للحريق عالية الجودة لتوفير أقصى درجات الأمان والمتانة."
        canonical="/accessories"
      />
      <ImageCatalogPage
        title="الإكسسوارات"
        description="مجموعة متنوعة من الإكسسوارات عالية الجودة المصممة خصيصاً لأبواب الطوارئ والأبواب المقاومة للحريق لتوفير أقصى درجات الأمان والمتانة."
        images={accessories}
        imageAltPrefix="إكسسوارات أبواب مقاومة للحريق"
      />
    </>
  );
}
