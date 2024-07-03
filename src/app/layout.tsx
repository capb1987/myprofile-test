import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Profile - Carlos Puello",
  description: "Carlos Puello´s Profile",
};

type LayoutProp = {
  children: Readonly<React.ReactNode>;
};

export default function RootLayout({ children }: LayoutProp) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
