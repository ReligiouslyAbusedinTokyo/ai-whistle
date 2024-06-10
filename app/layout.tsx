import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcaster",
  description: "Generate your podcasts using AI",
  icons:{
    icon:'/logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <AudioProvider>
       <body className={manrope.className}>
        <ConvexClerkProvider>
        {children}
        </ConvexClerkProvider>
        </body>
       </AudioProvider>
    </html>
  );
}
