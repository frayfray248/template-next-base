import type { Metadata } from "next";
import "./globals.css";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <html lang="en" data-theme="modernMin">
            <body className={`min-h-screen flex flex-col ${font}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
