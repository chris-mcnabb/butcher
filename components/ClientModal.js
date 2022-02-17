import {useEffect} from 'react';
import styles from "../styles/ClientModal.module.css"
import OverOns from "./OverOns";
import Menu from "./Menu";
import Aanbiedingen from "./Aanbiedingen";
import {ArrowBack} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {getProductSuccess} from "../redux/productRedux";
import axios from "axios";

const ClientModal = ({showModal, setShowModal, title, size}) => {



    const handleClick = () => {
        setShowModal(!showModal)

    }



    return (
        <>
            {showModal ? (
                <div className={styles.container}>

                    <div className={styles.wrapper}>
                        <div className={styles.top}>
                            <div onClick={handleClick} className={styles.terug}>
                                <button className={styles.modalButton}>
                                    <ArrowBack style={{color: "white", marginRight: "10px", fontSize: "35px !important"}}/>
                                    Terug
                                </button>
                            </div>

                        </div>
                        <div className={styles.bottom} size={size}>

                            {title === "Over Ons" && <OverOns/>}
                            {title === "Assortiment" && <Menu />}
                            {title === "Aanbiedingen" && <Aanbiedingen/>}

                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );


};

export default ClientModal;
