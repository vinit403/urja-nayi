import "./globals.scss";

export const metadata = {
  metadataBase: new URL(
    "https://urja-nayi-official.vercel.app"
  ),

  title:
    "Urja Nayi – Luxury Travel Agent & Founder of Ananta Urja Travels",

  description:
    "Urja Nayi is a young entrepreneur and luxury travel agent from Surat, founder of Ananta Urja Travels. She creates personalized travel experiences with premium destinations, unforgettable journeys, curated vacations, cultural escapes, and seamless planning for travelers across India and international destinations worldwide.",

  openGraph: {
    title:
      "Urja Nayi – Luxury Travel Agent & Founder of Ananta Urja Travels",

    description:
      "Discover luxury travel experiences curated by Urja Nayi, founder of Ananta Urja Travels.",

    url: "https://urja-nayi-official.vercel.app",

    siteName: "Urja Nayi",

    images: [
      {
        url: "/images/meta-image.jpg",

        width: 1200,

        height: 630,

        alt: "Urja Nayi",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Urja Nayi – Luxury Travel Agent",

    description:
      "Luxury travel experiences curated by Urja Nayi.",

    images: ["/images/meta-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}