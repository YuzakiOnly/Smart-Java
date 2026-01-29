import "../styles/globals.css";

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
    <html lang="id" className="dark">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
