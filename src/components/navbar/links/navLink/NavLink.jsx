"use client"

import { usePathname } from "next/navigation"
import styles from "./navLink.module.css"
import Link from "next/link"

//single nav link
const NavLink = ({ item }) => {
    const pathName = usePathname()
    return (
        <div className={styles.NavLink}>
            <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`} key={item.title}>{item.title}</Link>
        </div>
    )
}

export default NavLink;