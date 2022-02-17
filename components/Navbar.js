import React from 'react';
import styles from "../styles/Navbar.module.css"
import {Tooltip} from "@material-ui/core";
import Image from "next/image"
import logo from "../public/img/Logo.jpg"
import {Facebook, Phone, WhatsApp
} from "@material-ui/icons";

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

                <div className={styles.socialContainer}>
                    <div className={styles.socialIcon} color="white">
                        <Tooltip title={<h2>Telefoon: 06-41280374</h2>}  arrow>
                            <Phone/>
                        </Tooltip>
                    </div>
                    <div className={styles.socialIcon} color="white">
                        <a href="https://www.facebook.com">
                            <Tooltip title={<h2>Facebook</h2>} arrow>
                                <Facebook/>
                            </Tooltip>
                        </a>
                    </div>
                    <div className={styles.socialIcon} color="white">
                        <a href="https://www.whatsapp.com">
                            <Tooltip title={<h2>WhatsApp</h2>} arrow>
                               <WhatsApp/>
                            </Tooltip>
                        </a>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Navbar;

