import { Inter } from "next/font/google";
import "./globals.css";
import ContactHeader from "@/_components/ContactHeader";
import Navbar from "@/_components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactHeader 
        phone1="0731617196" 
        phone2="0721279974" 
        email="kiwanjasecondary@gmail.com" 
        />
        <Navbar/>
        {children}</body>
    </html>
  );
}
