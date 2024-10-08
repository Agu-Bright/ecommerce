import { Inter } from "next/font/google";
import "./globals.css";
import GeneralContextProvider from "@context/GeneralContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce App",
  description: "Brysontech Ecommerce store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GeneralContextProvider>{children}</GeneralContextProvider>
      </body>
    </html>
  );
}
