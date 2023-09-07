import { GlobalStateProvider } from '@/context/GlobalStateProvider'
import {
  fontInter,
  fontRecklessNue,
} from "@/lib/fonts";
import './globals.css'

export const metadata = {
  title: 'GIFTE Garden of Glow',
  description: 'A Digital Exhibition Experience by Gifte & Circles',

}



export default function RootLayout({ children }) {
  return (
    <GlobalStateProvider>
      <html lang="en">
        <body className={`${fontInter.variable} ${fontRecklessNue.variable}`}>
          {children}
        </body>
      </html>
    </GlobalStateProvider>
  )
}
