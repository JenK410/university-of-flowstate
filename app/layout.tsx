import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://universityofflowstate.com"),
  title: "University of FlowState",
  description:
    "University of FlowState is the public campus for career discovery, job training, language study, creative electives, and personalized academic planning.",
  icons: {
    icon: "/flowstate/flowstate-university-logo.svg",
    shortcut: "/flowstate/flowstate-university-logo.svg",
  },
  openGraph: {
    title: "University of FlowState",
    description:
      "A public online campus for career discovery, job training, language study, creative electives, and academic planning.",
    type: "website",
    images: [
      {
        url: "/flowstate/uoffs-link-preview.png",
        width: 1200,
        height: 630,
        alt: "UofFS crest link preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "University of FlowState",
    description:
      "A public online campus for career discovery, job training, language study, creative electives, and academic planning.",
    images: ["/flowstate/uoffs-link-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
