import './globals.css'
import React from 'react'

import { ClerkProvider } from '@clerk/nextjs';
import { light } from '@clerk/themes';
import Header from './components/header';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang='en'>
        <body>
          <Header />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-20'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}