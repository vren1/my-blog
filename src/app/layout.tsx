import type { Metadata } from "next"
import "./globals.css"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import NavBar from "./components/NavBar"
import { Roboto } from "next/font/google"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
