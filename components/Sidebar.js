import styles from "../styles/Sidebar.module.css"
import {
    Storefront,
    MailOutline,
} from "@material-ui/icons";
import Link from "next/link"
import {useState} from "react";

export default function Sidebar() {
    const [active, setActive] =  useState("")

    const handleClick = (selection) => {
        setActive(selection)
    }
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarWrapper}>
                <div className={styles.sidebarMenu}>
                    <h3 className={styles.sidebarTitle}>Dashboard</h3>
                    <ul className={styles.sidebarList}>
                        <Link href="/admin/products">
                            <li className={active == "Producten" ? styles.sidebarListItemActive : styles.sidebarListItem} onClick={()=>handleClick("Producten")}>
                                <Storefront className={styles.sidebarIcon} />
                                Producten
                            </li>
                        </Link>
                        <Link href="/admin/messages">
                            <li className={active == "Email" ? styles.sidebarListItemActive : styles.sidebarListItem} onClick={()=>handleClick("Email")}>
                                <MailOutline className={styles.sidebarIcon} />
                                Email
                            </li>
                        </Link>


                    </ul>
                </div>
            </div>
        </div>
    );
}
