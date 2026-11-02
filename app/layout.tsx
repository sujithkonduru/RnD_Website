import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope, Sora } from "next/font/google";
import "./globals.css";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteNavigation from "@/components/layout/SiteNavigation";
import { site } from "@/lib/data";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — Engineering ideas, solving real-world problems`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    url: "/",
    title: "Stackenzo Research & Development",
    description:
      "Applied research and engineering with industry, schools and colleges. From problem statement to validated prototype.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stackenzo Research & Development",
    description:
      "Applied research and engineering with industry, schools and colleges. From problem statement to validated prototype.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  category: "Research and development",
};

export const viewport: Viewport = {
  themeColor: "#203B3D",
  colorScheme: "dark",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  knowsAbout: [
    "Applied research",
    "Industrial IoT",
    "Embedded systems",
    "Research and development partnerships",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] bg-deep font-sans text-ivory antialiased">
        <a
          href="#main-content"
          className="sr-only rounded-none focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-brick focus:px-5 focus:py-3 focus:text-sm focus:text-ivory"
        >
          Skip to content
        </a>
        <SiteNavigation />
        <main id="main-content">{children}</main>
        <SiteFooter />
        {/* Animations must never be the only way to read the page. */}
        <noscript>
          <style>{`
            main [style*="opacity:0"], main [style*="opacity: 0"] { opacity: 1 !important; }
            main [style*="translateY"], main [style*="translateX"], main [style*="translateY("] { transform: none !important; }
            main [style*="clip-path"] { clip-path: none !important; }
            main figure > div > span[aria-hidden] { display: none !important; }
          `}</style>
        </noscript>
        <div aria-hidden className="film-grain" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
