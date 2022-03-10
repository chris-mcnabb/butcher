import styles from "../styles/CategoryItem.module.css"
import Link from 'next/link'


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
                            <Link href={`/product/${item._id}`}>
                            <li className={styles.productContainer}>
                                <h3 className={styles.itemTitle} style={{color: "white"}}>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3>
                                {item.Aanbiedingen && <h3 className={styles.special}>**Aanbiedingen**</h3>}
                                <div className={styles.priceContainer}>
                                        <span className={styles.price}
                                              style={{color: "white"}}>€{item.price.toFixed(2)}</span>
                                    <span className={styles.price} style={{color: "white"}}>per {item.per}</span>
                                </div>

                            </li>
                            </Link>
                        </>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default CategoryItem;
