import type { Metadata } from "next";
import "./globals.css";

// components
import Header from "@/sections/hairsalon/Header";
import Footer from '@/sections/hairsalon/Footer'


import font from '@/font/font'

export const metadata: Metadata = {
    title: "Next JS Template",
    description: "Next JS Template",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="modernMin" className="scroll-smooth">
            <body className={`relative min-h-screen flex flex-col ${font}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
