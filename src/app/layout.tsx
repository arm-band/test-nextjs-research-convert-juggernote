import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Juggernote',
  description: '論文的な文章を想定し、特定の書式 [jug][/jug] で囲まれたテキストから脚注を生成するフォーム。通常文章、 WordPress の Modern Footnotes, 印刷用の <sup></sup> の3種に対応。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
