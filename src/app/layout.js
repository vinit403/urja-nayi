import "./globals.scss";

export const metadata = {
  metadataBase: new URL(
    "https://urja-nayi-official.vercel.app"
  ),

  title:
    "Urja Nayi – Founder of Ananta Urja Travels",

  description:
    "Urja Nayi is a young entrepreneur and luxury travel agent from Surat, founder of Ananta Urja Travels. She creates personalized luxury travel experiences, curated vacations, international tours, honeymoon escapes, and unforgettable journeys crafted with elegance, comfort, and premium hospitality across India and worldwide destinations.",

  keywords: [
    "Urja Nayi",
    "Luxury Travel Agent",
    "Ananta Urja Travels",
    "Travel Consultant Surat",
    "International Tours",
    "Luxury Vacations",
    "Honeymoon Packages",
    "Travel Planner India",
  ],

  authors: [
    {
      name: "Urja Nayi",
    },
  ],

  creator: "Urja Nayi",

  publisher: "Ananta Urja Travels",

  openGraph: {
    title:
      "Urja Nayi – Founder of Ananta Urja Travels",

    description:
      "Discover curated luxury travel experiences, international tours, and unforgettable journeys with Urja Nayi.",

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
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/favicon.ico",
  },

  appleWebApp: {
    capable: true,

    title: "Urja Nayi",

    statusBarStyle: "default",
  },

  robots: {
    index: true,

    follow: true,
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