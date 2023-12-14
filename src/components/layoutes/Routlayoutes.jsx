import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Foter from "../Foter"

function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Foter />
        </>
    )
}

export default RootLayout