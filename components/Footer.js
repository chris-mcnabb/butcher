

import styles from "../styles/Footer.module.css"
const Footer = () => {

    return (
        <>

            <div className={styles.container}>
                <div className={styles.contactContainer}>
                    <div className={styles.addressContainer}>
                        <span className={styles.contactInfo}>
                            40-50 Bredaseweg
                        </span>
                        <span className={styles.contactInfo}>
                            Chaam, NL
                        </span>
                    </div>
                    <span className={styles.contactInfo}>
                        mobiele@gmail.com
                    </span>
                    <span className={styles.contactInfo}>
                        KvK: 06-41280374
                    </span>

                </div>
            </div>
        </>
    );
};

export default Footer;
