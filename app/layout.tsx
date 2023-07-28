import { Footer, Navbar } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen relative scrollbar-hide">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
