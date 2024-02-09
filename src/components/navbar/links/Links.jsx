import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink"
import { useState } from "react"


const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
]

// temporary 
const Session = true;
const isAdmin = true;

const Links = () => {

    const [open, setOpen] = useState(true)
    return (
        <div className={styles.links}>
            {
                links && links.map((link, index) => {
                    return (
                        <NavLink item={link} key={link.title} />
                    )
                })
            }
            {
                Session ? (
                    <>
                        {
                            isAdmin && (
                                <NavLink item={{ title: "Admin", path: "/admin" }} />
                            )
                        }
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )
            }





        </div>
    )
}

export default Links;