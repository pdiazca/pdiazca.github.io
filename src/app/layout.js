import './globals.css'
import './globalIcons.scss'
import { Montserrat } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './global.scss'
config.autoAddCss = false

const montserrat = Montserrat({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Pablo Diaz Art',
  description: 'Born in Mexico and currently residing on the unceded traditional territories of the Sḵwx̱wú7mesh Úxwumixw,\
  my artistic journey is deeply rooted in the exploration of geometric figures. This portfolio showcases my work,\
  reflecting my cultural background and artistic philosophy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
