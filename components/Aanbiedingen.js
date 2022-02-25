import styles from "../styles/Aanbiedingen.module.css"
import {useEffect, useState} from "react";
import axios from "axios";

const Aanbiedingen = ({showModal, setShowModal}) => {

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const getProducts = async () => {
            try{
                const res = await axios.get(
                    `/api/products`
                );
                setProducts(res.data);


            }catch(err){}
        }
        getProducts()
    },[])



    return (
        <div className={styles.container} onClick={()=> setShowModal(!showModal)}>

            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <h1>Aanbiedingen</h1>
                </div>
                <ul className={styles.itemContainer}>
                    { products.map((product)=>(
                        product.Aanbiedingen ? <>
                            <li className={styles.productContainer}>
                                <h3 className={styles.itemTitle} style={{color: "white"}}>{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</h3>
                                <div>
                                    <span className={styles.price} style={{color: "white"}}><b>Price: </b>€{product.price.toFixed(2)}</span>
                                    <span  className={styles.price} style={{color: "white"}}>per {product.per}</span>
                                </div>
                            </li>
                        </> : null
                    ))}
                </ul>

            </div>
        </div>
    );
};


export default Aanbiedingen;
