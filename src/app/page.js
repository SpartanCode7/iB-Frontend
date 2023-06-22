"use client"
import { useState } from "react";
import Navbar from "@/components/organisms/Navbar/Navbar"
import Footer from "@/components/organisms/Footer/Footer"
import HomePage from "@/components/templates/Home/HomePage"

export default function Home() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="main">
        {isLoggedIn && <h1>Hello Admin</h1>}
        <Navbar />
        <HomePage />
        <Footer />
        {/* <Login setIsLoggedIn={setIsLoggedIn} /> */}
    </main>
  )
}