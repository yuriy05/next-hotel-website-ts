import "@/app/styles/globals.css";

import Footer from "@/app/components/Footer";
import Header from "./components/Header";

import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel located in the heart of the Italian Dolomites, surounded by beautiful mountains and forests",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
