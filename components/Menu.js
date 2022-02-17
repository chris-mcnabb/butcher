import Category from "./Category";
import CategoryItem from "./CategoryItem";
import styles from "../styles/Menu.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
const Menu = () => {
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const getProducts = async() => {
            try{
                const res = await axios.get(process.env.VERCEL_URL+`/api/products/`)
                console.log(res.data)
                setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getProducts()
    },[])
    const handleCategory = (data) => {
        setCategory(data)

    }
    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <Category handleCategory={handleCategory}/>
                </div>

                {
                    category !== "" &&
                    <div className={styles.right}>
                        <CategoryItem category={category} products={products}/>
                    </div>
                }
            </div>

        </div>

    );
};

export default Menu;
