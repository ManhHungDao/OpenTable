import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Open Table",
  description: "Clone Open Table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <main className="bg-gray-100 min-h-screen w-full">
          <main className="max-w-screen-2xl m-auto bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  );
}
