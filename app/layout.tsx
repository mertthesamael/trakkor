import '@/styles/reset.scss'
import '@/styles/global.scss'
import '@/styles/variables.css'
import type { Metadata } from 'next'
import { roboto } from '@/libs/font'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'Trakkor',
  description: 'Project Tracking System Landing Page | Mert Enercan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className + ' ' + 'dark'}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
