import React from 'react';
import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "../public/img/Logo.jpg"
import dynamic from "next/dynamic";
const NavIcons = dynamic(()=>import("../components/NavIcons"), {ssr: false});
const Navbar = () => {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <div className={styles.logoContainer}>
                    <Image className={styles.logoImg}
                        src={logo}
                           alt=""
                           height="90px"
                           width="80px"
                    />
                    <h1 className={styles.logo}>
                        De Mobiele Slager
                    </h1>
                </div>
            </div>

            <div className={styles.right}>

                        <NavIcons/>

            </div>


        </div>
    );
};

export default Navbar;

