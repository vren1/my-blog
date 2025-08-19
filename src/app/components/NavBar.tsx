// components/Navbar.tsx
import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/posts">
          Posts
        </Button>
        <Button color="inherit" component={Link} href="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} href="/about">
          About Me
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
