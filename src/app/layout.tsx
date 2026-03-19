import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import { siteConfig } from "@/lib/site";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        {/* LCP image preload — one per viewport, not both */}
        <link
          rel="preload"
          as="image"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuBswblmMmSvckhQ6bcl7-wkOZ7uBITc1k3rxKSWxm15AaQZFES7sUG6j05OmPcldaukcYjqFIohzcpA_ImuWWMePcS5X_t1zZIBdreB1WG-oOUazZXAGpM1VhT_WXX6llsjXfyUuX4XJ_RPLSl8aJ9tkhCd8b3PlZRRgm_oFloN9ThXBJiRxdfhEU9qsdv3LKzzYFW1opPxBo45ocBRME5b7Crce-QEo1Qyxd7nmrA8_MlAdw40UQ_tjPwqHZIfm7loLg59oUJOscE=w960"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="https://lh3.googleusercontent.com/aida-public/AB6AXuAFD2qu-EGNxAyjdb0j_txxs592hQmp8B5tmknHhKyiWiXuwQ_Gp9CtUq-X3K6yXKbX0VeM27KG53TWNKlrZ0Z2OO961rFmmzwUqSu_pQZHr_G4UI3dNw0ciTetArEEBVkt6-qKFW5ndqH1f1l4uAkfoOFm5GAlG99Z8_gtItsYROpovJuQ6UInzNAYwUulFutIxIvdno9cHIfCfJdxeXVitk8dda0tNbdjBnDXtuFwIZS7ydVDt9fW9Q5zylU6PPRh79UFbkRvS24=w480"
          media="(max-width: 767px)"
          fetchPriority="high"
        />

        {/* Preconnect FIRST - before anything else downloads */}
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        <link rel="dns-prefetch" href="https://lh3.googleusercontent.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Material Symbols: load async, swap media AFTER first paint */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
          rel="stylesheet"
          media="print"
          id="material-symbols-css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `requestAnimationFrame(function(){document.getElementById('material-symbols-css').media='all'})`,
          }}
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL@20..48,100..700,0..1&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              email: siteConfig.email,
              description: siteConfig.description,
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} bg-background-light font-display text-slate-900 min-h-screen flex flex-col dark:bg-background-dark dark:text-slate-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
