import "./globals.scss";

export const metadata = {
  title: "Urja Nayi Portfolio",
  description: "Luxury Travel Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}