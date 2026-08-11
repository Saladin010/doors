# DataLayer Tracking Documentation

This document outlines the tracking infrastructure and dataLayer events implemented on the Smart Doors website for Google Ads and Google Tag Manager (GTM).

## Consent Mode v2
The site implements Google Consent Mode v2 out-of-the-box.
- **Default State**: All storage (ad, analytics, personalization, user_data) is set to `denied` via the snippet in `index.html`.
- **Update State**: When a user accepts the banner, a `gtag('consent', 'update')` call fires setting everything to `granted`, immediately followed by a `dataLayer.push({ event: 'consent_update', consent: 'granted' })`.

## DataLayer Events

You can map these events to GTM Triggers and subsequent Google Ads Conversion tags.

### 1. `quote_form_submit` (Primary Conversion)
Fired when a user successfully submits the Request for Quote (RFQ) form.
- **Trigger**: Form submit in `QuoteRequest.tsx`.
- **Payload**: Includes captured UTM parameters (if the user landed via an ad).
```javascript
{
  event: "quote_form_submit",
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "search_doors",
  utm_term: "fire doors",
  utm_content: ""
}
```

### 2. `whatsapp_click` (Secondary Action)
Fired when the user clicks the floating sticky WhatsApp button.
- **Trigger**: `onClick` in `WhatsApp.tsx`.
- **Payload**: None.
```javascript
{
  event: "whatsapp_click"
}
```

### 3. `phone_click` (Secondary Action)
Fired when the user clicks any direct `tel:` phone link on the site (e.g., in the Footer or the RFQ section).
- **Trigger**: `onClick` on phone links.
- **Payload**: None.
```javascript
{
  event: "phone_click"
}
```

### 4. `pdf_view` / `pdf_download` (Micro-Conversion)
Fired when a user interacts with the Company Profile or Catalog PDFs in the `/about` page.
- **Trigger**: `onClick` on the View or Download buttons in `About.tsx`.
- **Payload**: Includes the document title.
```javascript
{
  event: "pdf_view", // or "pdf_download"
  file_name: "كتالوج المنتجات 2026"
}
```

### 5. `doors_page_view` / `accessories_page_view` (Remarketing Signals)
Fired when the user views the dedicated Doors or Accessories catalog pages. Useful for building retargeting audiences even if no form was submitted.
- **Trigger**: Page load (`useEffect`) in `Doors.tsx` / `Accessories.tsx`.
- **Payload**: None.
```javascript
{
  event: "doors_page_view" // or "accessories_page_view"
}
```

## UTM Parameter Storage
When a user lands on the site with `?utm_source=...`, the parameters are parsed and stored in `sessionStorage` (so they persist across page navigations). These are then attached to the `quote_form_submit` event to attribute leads correctly in Google Ads/Analytics.
