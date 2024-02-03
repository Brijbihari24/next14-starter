import Link from "next/link"
import Links from "./links/Links"

const Navbar = () => {
    return (
        <div>
            <div className="logo">
                LOGO
            </div>
            <div className="nav-links">
                <Links />
            </div>
        </div>
    )
}

export default Navbar;