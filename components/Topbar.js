import styles from "../styles/Topbar.module.css"
import { Settings } from "@material-ui/icons";
import Image from "next/image"
import steak from "../public/img/steak.jpeg"
import {useRouter} from "next/router"
import { signOut } from "next-auth/react"
import React from "react";


export default function Topbar() {
const router = useRouter()
    return (
        <div className={styles.topbar}>
            <Image src={steak}
                   priority={true}
                   alt=""
                   layout="fill"
                objectFit="cover"
            />

            <div className={styles.topbarWrapper}>
                <div >
                    <span className={styles.logo}>De Mobiele Slager</span>
                </div>
                <div className={styles.topRight}>
                    <div className={styles.topbarIconContainer}>

                            <button className={styles.productAddButton2} onClick={()=>router.push("/admin/newproduct")}>Nieuw</button>

                        <button className={styles.logoutButton}>
                            <div className={styles.settingsContainer}>
                                <span className={styles.logOut} onClick={()=>signOut()}>Logout</span>
                                <Settings />
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
