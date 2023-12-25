import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local';
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/waitlist/Header'
import Footer from '@/components/waitlist/Footer'
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ['latin'] })

const clash = localFont({
  src: [
    {
      path: '../public/fonts/ClashGrotesk-Variable.woff2',
      weight: '200, 700',
    }
  ],
});

export const metadata: Metadata = {
  title: 'GridApe Waitlist',
  description: 'GridApe is at the forefront of revolutionizing email marketing. Our mission is to empower businesses to create impactful email campaigns effortlessly.',
  icons: {
    icon: ['/favicon_io/favicon.ico?v4'],
    apple: ['/favicon_io/apple-touch-icon.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className={`bg-[#FFFAE9] ${clash.className}`}>
      <Toaster position="top-right" reverseOrder={false} />
        {/* <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > */}
        <Header />
        {children}
        {/* </ThemeProvider> */}
        <Footer />
      </body>
    </html>
  )
}
