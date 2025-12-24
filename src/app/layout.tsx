import LiquidBackground from "../components/background/LiquidBackground";
import Navbar from "../components/ui/Navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="relative min-h-screen">
        {/* Background */}
        <LiquidBackground />

        {/* Foreground UI */}
        <Navbar />

        <main className="relative z-10 p-4">
          {children}
        </main>

        
      </body>
    </html>
  );
}
