import "./globals.css";
import { Header, Footer } from "./sections";


export const metadata = {
  title: 'Agency Landing Page',
  description: 'A Nextjs Agency portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
