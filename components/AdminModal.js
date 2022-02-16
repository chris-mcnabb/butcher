import styles from "../styles/AdminModal.module.css"
import {ArrowBack} from "@material-ui/icons";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import axios from "axios";

const AdminModal = ({showModal, setShowModal, title, size, path, id}) => {


    const router= useRouter();
    const [error, setError] = useState(false)
    const [responseMessage, setResponseMessage] = useState("")


    const handleClick = () => {
        error && setError(false)
        setShowModal(!showModal)
    };

    const handleDelete = async(e) => {
        e.preventDefault()
        try{
            const res = await axios.delete(`http://localhost:3000/api/${path}/${id}`)
            setResponseMessage(res.data.status)

        }catch(err){
                setError(true)
        }


    }

    return (
        <>
            {showModal && (
                <div className={styles.container}>

                    <div className={styles.wrapper}>
                        <div className={styles.top}>
                            <div className={styles.buttonContainer} onClick={handleClick}>
                                <button className={styles.adminModalButton}>
                                    <ArrowBack style={{ marginRight: "10px", fontSize: "35px !important"}}/>
                                    Terug
                                </button>
                            </div>
                            <h1 className={styles.title}>
                                {title}
                            </h1>
                        </div>
                        <div className={styles.bottom} size={size}>

                            <div className={styles.confirmContainer}>


                                        {responseMessage === "" &&
                                            <>
                                            <div>
                                                {title === "messages" && <h3>Clear Message and Order?</h3>}
                                                {title === "products" && <h3>Verwijder?</h3>}

                                            </div>
                                            <div className={styles.confirmBottom}>
                                            <button className={styles.confirm} onClick={handleDelete}>Ja</button>
                                            <button className={styles.decline} onClick={()=>(
                                            setShowModal(!showModal),
                                            setError(false)
                                            )}>Nee</button>
                                            </div>
                                            </>
                                        }

                                {error &&
                                    <h1 style={{color: "red"}}>Something went wrong!!!</h1>
                                }
                                {responseMessage==="DELETED" &&
                                    <div className={styles.successContainer}>
                                        <h1 className={styles.success}>Succes!</h1>
                                        <button className={styles.terug}
                                                onClick={()=>(
                                                    setShowModal(false),
                                                        router.replace(`/admin/${title}`),
                                                        setResponseMessage("")
                                                )}
                                        >Terug</button>
                                    </div>
                                }




                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </>
    );

};

export default AdminModal;
