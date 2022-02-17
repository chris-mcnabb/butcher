import React, {useState} from 'react';
import styles from "../../../styles/Message.module.css"
import {useSelector} from "react-redux";
import Link from "next/link"
import {useRouter} from "next/router";
import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/Sidebar";
import {getSession} from "next-auth/react";
import Head from "next/head";
const Message = () => {
    const {asPath} = useRouter()
    const router = useRouter();
    const messageId = asPath.split("/")[3]
    const message =  useSelector((state)=>state.mail.messages.find((message)=>message._id === messageId));
    return (
        <>
            <Topbar/>
            <div className={styles.container}>
                <Head>
                    <title>De Mobiele Slager</title>
                    <meta name="Chaam, NL Slager" content="Generated by me" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Rock+Salt&family=Sansita+Swashed:wght@500;600;700;800;900&display=swap" rel="stylesheet"/>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Sidebar/>
            <div className={styles.mail}>

                <div className={styles.mailTitleContainer}>
                    <h1 className={styles.mailTitle}>Email</h1>

                        <button className={styles.messageDeleteButton} value="delete"
                                onClick={()=>router.push("/admin/messages")}
                        >Terug</button>

                </div>


                <div className={styles.mailTop}>
                    <div className={styles.mailTopLeft}>
                        <div className={styles.mailInfoTop}>
                            <span className={styles.mailName}>Message From:</span>
                        </div>
                        <div className={styles.mailInfoBottom}>
                            <div className={styles.mailInfoItem}>

                                <span className={styles.mailInfoValue}><b>Naam:</b>  {message.firstName} {message.lastName}</span>
                            </div>
                            <div className={styles.mailInfoItem}>

                                <span className={styles.mailInfoValue}><b>Email:</b>  {message.email}</span>
                            </div>
                            <div className={styles.mailInfoItem}>

                                <span className={styles.mailInfoValue}><b>Telefoon:</b>  {message.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.mailTopRight}>
                        <div className={styles.mailInfoBottom}>
                            <div className={styles.mailInfoTop}>
                                <span className={styles.mailName}>Message:</span>
                            </div>

                            <div className={styles.mailMessageItem}>

                                <p className={styles.mailInfoValue}>{message.message}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Message;
export const getServerSideProps = async (context) => {
    const session = await getSession({req: context.req})
    if (!session) {
        return {
            redirect: {
                destination: '/admin/',
                permanent: false,
            },
        };
    }
return{
        props: {session}
}
}
