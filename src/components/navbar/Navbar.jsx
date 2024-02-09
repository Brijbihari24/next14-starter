import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className="nav-links">
                <Links />
            </div>
        </div>
    )
}

export default Navbar;