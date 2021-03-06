import Head from 'next/head'
import Image from 'next/image'
import axios from "axios";
import {useDispatch} from "react-redux";
import styles from '../styles/Home.module.css'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, {useState} from "react";
import steak2 from "../public/img/steak2.jpeg";
import ClientModal from "../components/ClientModal";
import {getProductSuccess} from "../redux/productRedux";

export default function Home({products}) {

    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState("")


    const handleClick = (e) => {
        setTitle(e.target.value);
        setShowModal(true);
    }

  return (
      <>
          <ClientModal showModal={showModal} setShowModal={setShowModal} title={title} products={products}/>

          <div className={styles.container}>
        <Image src={steak2}
               alt=""
               layout="fill"

        />
      <Head>
        <title>De Mobiele Slager</title>
        <meta name="Chaam, NL Slager" content="Generated by me" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Rock+Salt&family=Sansita+Swashed:wght@500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <Navbar/>
        <div className={styles.wrapper}>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClick} value="Assortiment">
                    Assortiment
                </button>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClick} value="Aanbiedingen">
                    Aanbiedingen
                </button>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleClick} value="Over Ons">
                    Over Ons
                </button>
            </div>

        </div>
        <Footer/>
    </div>
          </>
  )
}
export const getInitialProps = async () => {
    const res = await axios.get(process.env.VERCEL_URL+`/api/products`);
    return {
        props: {
            products: res.data,
        }
    }
}

