/* ============================================================
   PROTOCOL // EI — content + media registry
   ============================================================ */

import heroDoorUrl from "../../public/images/hero-door.jpg";

const px = (id: number, w = 1200, h = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const heroImg = heroDoorUrl;

/* ----- Production line (8 stages) ----- */
export type Stage = { idx: string; ar: string; spec: string; img: string };
export const productionStages: Stage[] = [
  { idx: "01", ar: "لفة صاج خام", spec: "GALV. STEEL · 0.8–1.2mm", img: px(29224626) },
  { idx: "02", ar: "قص بالليزر CNC", spec: "TOLERANCE ±0.2mm", img: px(29988963) },
  { idx: "03", ar: "تشكيل وثني", spec: "PRESS BRAKE · 8 BENDS", img: px(18569742) },
  { idx: "04", ar: "لحام أرجون / CO₂", spec: "MIG / TIG · ARGON SHIELD", img: px(17406672) },
  { idx: "05", ar: "حشو القلب", spec: "MINERAL CORE · 160kg/m³", img: px(27084592) },
  { idx: "06", ar: "طلاء وتجهيز", spec: "POWDER COAT • 60µm", img: "/painting-door.png" },
  { idx: "07", ar: "اختبار حريق معتمد", spec: "FURNACE · 1043°C", img: px(36398133) },
  { idx: "08", ar: "باب جاهز مختوم", spec: "CERTIFIED · SEALED", img: "/ready-sealed-door.png" },
];

/* ----- Product catalog (6) ----- */
export type Product = {
  cat: string;
  badge: string;
  badgeType: "fire" | "sec" | "ss" | "en" | "custom";
  specs: { label: string; value: string }[];
  img: string;
  portrait?: boolean;
};
export const products: Product[] = [
  {
    cat: "أبواب مقاومة للحريق حتى 150 دقيقة",
    badge: "150 دقيقة",
    badgeType: "fire",
    specs: [
      { label: "السماكة", value: "60mm" },
      { label: "القلب", value: "معدني مزدوج" },
      { label: "المعيار", value: "مركز البحوث" },
    ],
    img: heroImg,
    portrait: true,
  },
  {
    cat: "أبواب طوارئ",
    badge: "90 دقيقة",
    badgeType: "fire",
    specs: [
      { label: "السماكة", value: "45mm" },
      { label: "القلب", value: "صوف صخري" },
      { label: "المعيار", value: "مركز البحوث" },
    ],
    img: "/door-1.jpeg",
    portrait: true,
  },
  {
    cat: "أبواب",
    badge: "متين",
    badgeType: "sec",
    specs: [
      { label: "السماكة", value: "70mm" },
      { label: "الهيكل", value: "أوصال فولاذية" },
      { label: "المقاومة", value: "عالية" },
    ],
    img: "/door-2.jpeg",
    portrait: true,
  },
  {
    cat: "تصنيع حسب المقاسات والمواصفات",
    badge: "CUSTOM",
    badgeType: "custom",
    specs: [
      { label: "الأبعاد", value: "حسب الطلب" },
      { label: "القلب", value: "مزدوج" },
      { label: "المواصفة", value: "حسب التصميم" },
    ],
    img: px(14806238, 900, 1200),
    portrait: true,
  },
  {
    cat: "توريد وتركيب",
    badge: "مصر",
    badgeType: "ss",
    specs: [
      { label: "التغطية", value: "لجميع أنحاء مصر" },
      { label: "التنفيذ", value: "فوري" },
      { label: "الخدمة", value: "متكاملة" },
    ],
    img: px(8276607, 900, 1200),
    portrait: true,
  },
  {
    cat: "إكسسوارات وأقفال",
    badge: "معتمد",
    badgeType: "en",
    specs: [
      { label: "الأسطوانة", value: "أمان 6 دبابيس" },
      { label: "القفل", value: "ذكي / ميكانيكي" },
      { label: "المعيار", value: "مركز البحوث" },
    ],
    img: "/accessories-locks.png",
    portrait: true,
  },
];

/* ----- Certifications ----- */
export type Cert = { code: string; line1: string; line2: string; range: string };
export const certifications: Cert[] = [
  { code: "مركز البحوث", line1: "شهادات اعتماد", line2: "واختبارات معتمدة من مركز البحوث", range: "حتى 150 دقيقة" },
  { code: "السلامة والأمان", line1: "معايير تصنيع", line2: "وفق أحدث معايير السلامة والأمان", range: "قياسي" },
  { code: "مواصفات فنية", line1: "خامات عالية الجودة", line2: "ومواصفات فنية معتمدة", range: "موثق" },
];

/* ----- Deployments (engineering case files) ----- */
export type Deployment = {
  title: string;
  type: string;
  doors: string;
  rating: string;
  location: string;
  img: string;
};
export const deployments: Deployment[] = [
  { title: "فندق 5 نجوم", type: "ضيافة", doors: "340", rating: "60 دقيقة", location: "شرم الشيخ", img: px(26729563) },
  { title: "مستشفى تخصصي", type: "طبي", doors: "512", rating: "90 دقيقة", location: "القاهرة الجديدة", img: px(6758531) },
  { title: "برج مكاتب إداري", type: "مكتبي", doors: "880", rating: "120 دقيقة", location: "العاصمة الإدارية", img: px(6758532) },
  { title: "مجمع تجاري", type: "تجاري", doors: "1240", rating: "90 دقيقة", location: "الإسكندرية", img: px(20382216) },
  { title: "مشروع سكني فاخر", type: "سكني", doors: "210", rating: "معدني", location: "الشيخ زايد", img: px(8312027) },
  { title: "مبنى حكومي", type: "إداري", doors: "460", rating: "150 دقيقة", location: "المنصورة", img: px(26729558) },
];

/* ----- Systems readout ----- */
export type Stat = {
  prefix?: string;
  value?: number;
  suffix?: string;
  label: string;
};
export const stats: Stat[] = [
  { prefix: "حتى ", value: 150, label: "دقيقة (مقاومة حريق)" },
  { label: "تصنيع + توريد + تركيب" },
  { label: "تغطية جميع محافظات مصر" },
  { label: "حلول متكاملة للمشاريع" },
];


export const navLinks = [
  { ar: "الرئيسية", href: "/" },
  { ar: "الأبواب", href: "/doors" },
  { ar: "عن الشركة", href: "/about" },
  { ar: "الإكسسوارات", href: "/accessories" },
  { ar: "تواصل معنا", href: "/#quote" },
];

export const contact = {
  phone: "01024572455",
  phoneHref: "tel:+201024572455",
  whatsapp: "https://wa.me/201014545881",
  email: "smartdoors6@gmail.com",
  address: "العاشر من رمضان",
};

export const accessories = Array.from({ length: 12 }, (_, i) => `/accessories/acc-${i + 1}.jpeg`);

export const aboutDocuments = [
  {
    title: "البطاقة الضريبية",
    file: "/about/البطاقة الضريبية-3.pdf",
    thumbnail: null
  },
  {
    title: "شهادة اختبار باب",
    file: "/about/شهادة اختبار باب.pdf",
    thumbnail: null
  },
  {
    title: "لنظم السلامه والبيئه",
    file: "/about/لنظم السلامه والبيئه .pdf",
    thumbnail: null
  },
  {
    title: "مستخرج سمارت لابواب الطوارئ",
    file: "/about/مستخرج سمارت لابواب الطوارئ .pdf",
    thumbnail: null
  },
  {
    title: "سابقة الأعمال",
    file: "/about/سابقة الاعمال (2).pdf",
    thumbnail: null
  }
];

export const colorsDocument = {
  title: "كرتلة الألوان",
  file: "/colors/كرتله الالوان جديد.pdf",
  thumbnail: null
};
