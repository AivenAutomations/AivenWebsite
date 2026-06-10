import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteBackground } from "@/components/SiteBackground";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aivenautomations.com"),
  title: {
    default: "Aiven Automations — AI automation systems for businesses",
    template: "%s · Aiven Automations",
  },
  description:
    "Aiven builds AI-powered automation systems for businesses — so your team responds faster, stays organized, and stops doing the same manual work every day.",
  openGraph: {
    title: "Aiven Automations — AI automation systems for businesses",
    description:
      "Custom AI assistants and workflow automation that connect your customer conversations with your internal operations.",
    url: "/",
    siteName: "Aiven Automations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aiven Automations",
    description:
      "Custom AI automation systems for service and product businesses.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full bg-background text-graphite antialiased">
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
