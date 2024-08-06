import '@styles/globals.css'
import SessionProviderWrapper from '@components/SessionProviderWrapper';

export const metadata = {
  title: "Social Media Dashboard",
  description: "A social media dashboard",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      </head>
      <body className='antialiased'>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  )
}

export default RootLayout
