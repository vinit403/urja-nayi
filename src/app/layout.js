import "./globals.scss";

export const metadata = {
  title:
    "Urja Nayi – Founder of Ananta Urja Travels",

  description:
    "Urja Nayi is a young entrepreneur and luxury travel agent from Surat, founder of Ananta Urja Travels. She creates personalized travel experiences with premium destinations, unforgettable journeys, curated vacations, cultural escapes, and seamless planning for travelers seeking comfort, elegance, adventure, and memorable experiences across India and international destinations worldwide.",

  openGraph: {
    title:
      "Urja Nayi – Luxury Travel Agent & Founder of Ananta Urja Travels",

    description:
      "Discover luxury travel experiences curated by Urja Nayi, founder of Ananta Urja Travels.",

    images: [
      {
        url: "/images/urja.jpg",
        width: 1200,
        height: 630,
        alt: "Urja Nayi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Urja Nayi – Luxury Travel Agent",

    description:
      "Luxury travel experiences curated by Urja Nayi.",

    images: ["/images/urja.jpg"],
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