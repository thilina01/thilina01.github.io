import React from "react";
import { Helmet } from "react-helmet-async";
import site from "../data/site.json";

export default function MetaTags() {
  const baseUrl = `https://${site.domain}`;
  const imageUrl = `${baseUrl}${site.previewImage}`;

  const jsonLd = site.structuredData
    ? {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": site.author,
        "jobTitle": site.jobTitle,
        "url": baseUrl,
        "sameAs": Object.values(site.social || {}),
        "worksFor": {
          "@type": "Organization",
          "name": site.organization
        }
      }
    : null;

  return (
    <Helmet>
      {/* Dynamic Title */}
      <title>{`${site.title} - ${site.jobTitle}`}</title>

      {/* SEO Meta */}
      <meta name="description" content={site.description} />
      <meta name="author" content={site.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph */}
      <meta property="og:title" content={`${site.title} - ${site.jobTitle}`} />
      <meta property="og:description" content={site.ogDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${site.title} – ${site.jobTitle}`} />
      <meta name="twitter:description" content={site.twitterDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content={site.twitter?.site} />
      <meta name="twitter:creator" content={site.twitter?.creator} />

      {/* Canonical */}
      {site.canonical && <link rel="canonical" href={`${baseUrl}/`} />}

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {/* GoatCounter Analytics */}
      {site.analytics?.goatcounter && (
        <script
          data-goatcounter={site.analytics.goatcounter}
          async
          src="//gc.zgo.at/count.js"
        ></script>
      )}
    </Helmet>
  );
}
