import { Footer, Navbar } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="garden">
      <body className="scrollbar-hide">
        <div className="min-h-screen relative ">
          <Navbar />
          <section className="bg-gray-100">{children}</section>
          <Footer />
        </div>
      </body>
    </html>
  );
}
