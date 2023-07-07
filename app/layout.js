import '@/styles/globals.css';
import { Inter } from 'next/font/google'
import Header from '../Components/Header';
import Provider from '../Components/Provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptious',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Provider>
      <Header /> 
      {children}
      </Provider>
      </body>
    </html>
  )
}
