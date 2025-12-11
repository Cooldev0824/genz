import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import '@/public/assets/css/style.css'

import { Noto_Sans } from "next/font/google";

import { ThemeProvider } from '@/utils/themeContext';


const notoSans = Noto_Sans({
  variable: "--font-noto-san",
  subsets: ["latin"],
});

export const metadata = {
  title: "Genz - NextJS 15",
  description: "Creative Personal Blog Portfolio Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
