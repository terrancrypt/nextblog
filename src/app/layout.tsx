import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextBlog',
  description: 'This is my NextJS Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="connect-src 'self' vitals.vercel-insights.com"
        />
      </Head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className='container py-[30px] min-h-full flex flex-col justify-between'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
