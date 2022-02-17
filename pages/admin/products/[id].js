import React, {useState} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../../styles/Product.module.css"
import Topbar from "../../../components/Topbar";
import Sidebar from "../../../components/Sidebar";
import {getSession} from "next-auth/react";
import {updateProduct} from "../../../redux/apiCalls"
import Head from "next/head";

const Product = () => {

    const dispatch = useDispatch()
    const {asPath} = useRouter()
    const productId = asPath.split("/")[3]
    const {response} = useSelector((state)=>state.product)
    const product =  useSelector((state)=>state.product.products.find((product)=>product._id === productId));
    const [inputs, setInputs] = useState({});

    const router = useRouter()

    const handleChange = (e) => {
         const {name, value} = e.target

        setInputs(prev=>{
            return {...prev, [name]: value}
        })
    };
    const handleUpdate = (e) => {
        e.preventDefault()
        updateProduct(dispatch, productId, inputs);

       if(response === "Product Updated") {
            router.push('/admin/products');
        }
    }
    const handleCancel = (e) => {
        e.preventDefault()
        router.push("/admin/products")
    }

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
              <div className={styles.product}>
              <div className={styles.productTitleContainer}>
              <h1 className={styles.productTitle}>{product.title}</h1>
              </div>

              <div className={styles.productBottom}>
              <form className={styles.productForm}>
              <div className={styles.productFormLeft}>
              <label>Producten</label>
              <input type="text" placeholder={product.title} name="title"  onChange={handleChange} />
              <label>Prijs</label>
              <input type="text" placeholder={`€${product.price.toFixed(2)}`}  name="price" onChange={handleChange} />
              <label>In Stock</label>
              <select name="inStock" id="idStock" onChange={handleChange} >
              <option value="true">Ja</option>
              <option value="false">Nee</option>
              </select>
              <label>Aanbiedingen</label>
              <select name="Aanbiedingen" id="Aanbiedingen" onChange={handleChange}>
          {product.Aanbiedingen &&
              <>
              <option value="true">Ja</option>
              <option value="false">Nee</option>
              </>
          }
          {!product.Aanbiedingen &&
              <>
              <option value="false">Nee</option>
              <option value="true">Ja</option>
              </>
          }
              </select>
              </div>
              <div className={styles.productFormRight}>
              <button className={styles.productButton} onClick={handleUpdate}>Update</button>
              <button className={styles.productButton} style={{backgroundColor: "red"}} onClick={handleCancel}>Annuleer</button>
              </div>
              </form>
              </div>
              </div>

              </div>
      </>
    );
};
export const getServerSideProps = async (context) =>{


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
        props:{
            session,

        }
    };
};

    export default Product;

