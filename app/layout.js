import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Flip Message Board",
  description: "Design & Develop by Alfred",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrains.className}>{children}</body>
    </html>
  );
}
