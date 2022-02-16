import styles from "../styles/Navbar.module.css";
import {Tooltip} from "@material-ui/core";
import "boxicons"
const NavIcons = () => {
    return (
        <div className={styles.socialContainer}>
            <div className={styles.socialIcon} color="white">
                <Tooltip title={<h2>Telefoon: 06-41280374</h2>}  arrow>
                    <box-icon type='solid' color="white" animation='tada-hover' name='phone'></box-icon>
                </Tooltip>
            </div>
            <div className={styles.socialIcon} color="white">
                <a href="https://www.facebook.com">
                    <Tooltip title={<h2>Facebook</h2>} arrow>
                        <box-icon type='logo' color="white" animation='tada-hover' name='facebook-square'></box-icon>
                    </Tooltip>
                </a>
            </div>
            <div className={styles.socialIcon} color="white">
                <a href="https://www.whatsapp.com">
                    <Tooltip title={<h2>WhatsApp</h2>} arrow>
                        <box-icon name='whatsapp' color="white" animation='tada-hover' type='logo' ></box-icon>
                    </Tooltip>
                </a>
            </div>
        </div>

    );
};

export default NavIcons;
