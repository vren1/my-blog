"use client"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "column", // Centers vertically if content is in a column
          justifyContent: "center", // Centers horizontally
          alignItems: "flex-start", // Centers vertically
          minHeight: "100vh", // Ensures the Box takes up the full viewport height
        },
      },
    },
  },
})

export default theme
