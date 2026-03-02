import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="bg-surface" style={{ minHeight: '100vh' }}>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}