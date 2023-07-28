import { Footer, Navbar } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className="min-h-screen relative scrollbar-hide">
        <Navbar />
        <section className="grid place-items-center bg-red-800">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
