import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });
import "./dashboard.css";
import GeneralContextProvider from "@context/GeneralContext";

export const metadata = {
  title: "Ecommerce App",
  description: "Brysontech Ecommerce Dashboard",
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
