// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // optional, see note below

export const metadata: Metadata = {
  title: "Teen Gym Plans",
  description: "Safe, teen-appropriate training plans (13–18).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
