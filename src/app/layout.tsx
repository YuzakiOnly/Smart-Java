import SmoothScrollWrapper from "@/components/wrapper/scroll-smooth";
import "../styles/globals.css";
import { Inter, Montserrat, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata = {
  title: "Smart-Java Game",
  description: "Game Edukasi Jurusan Perhotelan & Kuliner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-background text-foreground antialiased ${inter.variable} ${montserrat.variable} ${dmSans.variable}`} suppressHydrationWarning>
        <ThemeProvider attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SmoothScrollWrapper>
            {children}
          </SmoothScrollWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
