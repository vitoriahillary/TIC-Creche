"use client"
import SideBar from '@/components/SideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {usePathname} from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Creche',
  description: 'Gerenciar patrimonios e estoque da creche',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  return (
    <html lang="en">
      <body>
      <div className={`${pathname != '/' && 'grid grid-cols-app'}`}>
      {pathname != '/' && <div className="flex-col bg-zinc-800">
                <SideBar />
            </div>}
        <main>
        {children}
        </main>
      </div>
      </body>
    </html>
  ) 
}
