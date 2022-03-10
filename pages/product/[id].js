import React from 'react';
import styles from "../../styles/ProductPage.module.css"
import Image from "next/image";
import Navbar from "../../components/Navbar";
import steak from "../../public/img/hamburger.jpeg"
import axios from "axios";
import {ArrowBack} from "@material-ui/icons";
import {useRouter} from "next/router";
const ProductPage = ({product}) => {
    const router = useRouter()
const handleClick = () => {
    router.push("/")
}
    console.log(product)
    return (
        <div className={styles.container}>
         <div className={styles.navbar}><Navbar/></div>
            <div className={styles.header}>
                <div onClick={handleClick} className={styles.terug}>
                    <button className={styles.modalButton}>
                        <ArrowBack style={{ marginRight: "10px", fontSize: "35px !important"}}/>
                        Terug
                    </button>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.bottom}>
                    {product.img ?  <Image src={product.img} alt="" height={500} width={500} objectFit="contain"/>
                    : null
                    }
                </div>
                <div className={styles.top}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <h2 className={styles.price}>€{product.price.toFixed(2)} per {product.per}</h2>
                </div>

            </div>


        </div>
    );
};

    export default ProductPage;
export const getServerSideProps = async ({params}) => {
    const res = await axios.get(process.env.VERCEL_URL+`/api/products/${params.id}`);
    return {
        props: {
            product: res.data,
        }
    }
}
