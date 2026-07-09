import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Celeste — Portfolio',
  description: 'Chih Hsuan (Celeste) — Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
