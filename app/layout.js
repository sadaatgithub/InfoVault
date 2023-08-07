import SideBar from '@/components/SideBar'
import './globals.css'
import { Inter } from 'next/font/google'
import TopBar from '@/components/TopBar'
import { BurgerProvider } from '@/context/burgerContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Info-Vault',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <BurgerProvider>
        <main className='flex  min-h-screen w-full max-w-[1440px] mx-auto relative'>
          <SideBar/>
        <section className='flex flex-col w-full h-screen'>
        <TopBar/>
        <div className='bg-[#F4F4F4] min-h-screen md:p-4 lg:p-10 lg:pr-24 overflow-y-scroll '>{children}</div>
        </section>

        </main>
        </BurgerProvider>

        </body>
    </html>
  )
}
