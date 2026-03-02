import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import "../App.css"

export default function Layout() {
    return (
        <div className="min-h-screen bg-dark-950 text-dark-200 relative">
            <Navbar />
            <main><Outlet /></main>
            <Footer />
        </div>
    )
}