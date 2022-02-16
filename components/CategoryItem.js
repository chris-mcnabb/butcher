import styles from "../styles/CategoryItem.module.css"

import {useSelector} from "react-redux";

const CategoryItem = ({category, products}) => {

    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <div className={styles.top}>
                    <h1 className={styles.catTitle} style={{color: "white"}}>{category}</h1>
                </div>
                <ul className={styles.itemContainer}>
                    {products.map((item) => (
                        item.categories.includes(category) && <>
                            <li className={styles.productContainer}>
                                <h3 className={styles.itemTitle} style={{color: "white"}}>{item.title}</h3>
                                {item.Aanbiedingen && <h3 className={styles.special}>**Aanbiedingen**</h3>}
                                <div className={styles.priceContainer}>
                                        <span className={styles.price}
                                              style={{color: "white"}}><b>Price: </b>€{item.price.toFixed(2)}</span>
                                    <span className={styles.price} style={{color: "white"}}>per {item.per}</span>
                                </div>

                            </li>
                        </>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default CategoryItem;
