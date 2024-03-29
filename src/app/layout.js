import { Inter } from "next/font/google";
import "./globals.css";
import CustomNavbar from "@/components/CustomNavbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContext from "@/context/userContext";
import UserProvider from "@/context/userProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mk Project Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
    <UserProvider>
    <ToastContainer />
        <div>
          <CustomNavbar />
        </div>
        <div>{children}</div>
        <div>
          <Footer />
        </div>
        </UserProvider>
      </body>
    </html>
  );
}
