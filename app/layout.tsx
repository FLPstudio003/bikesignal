import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bikesignal.sk | shop • service • support",
  description:
    "BikeSignal – servis bicyklov, pickup & delivery, online rezervácie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
