import styles from "../styles/Category.module.css"
import rund from "../public/img/steer.svg"
import kip from "../public/img/kip.svg"
import bbq from "../public/img/BBQ.svg"
import soep from "../public/img/soep.svg"
import Image from "next/image"
const Category = ({handleCategory}) => {


    return (

        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <h1 className={styles.menuTitle}>Assortiment</h1>
                    <ul>
                        <li className={styles.menuCategoryListItem} onClick={()=>handleCategory("Vlees")}>
                            <span className={styles.categoryItem}>
                                Vlees
                            </span>
                            <Image className={styles.categoryImg}
                                   src={rund}
                                   alt=""
                                   height="70px"
                                   width="70px"


                            />
                        </li>
                        <li className={styles.menuCategoryListItem} onClick={()=>handleCategory("Kip")}>
                            <span className={styles.categoryItem}>
                                Kip
                            </span>
                            <Image className={styles.categoryImg}
                                   src={kip}
                                   alt=""
                                   height="70px"
                                   width="70px"
                            />
                        </li>
                        <li className={styles.menuCategoryListItem} onClick={()=>handleCategory("BBQ")}>
                            <span className={styles.categoryItem}>
                                BBQ
                            </span>
                            <Image className={styles.categoryImg}
                                   src={bbq}
                                   alt=""
                                   height="70px"
                                   width="70px"
                            />
                        </li>
                        <li className={styles.menuCategoryListItem} onClick={()=>handleCategory("Diversen")}>
                            <span className={styles.categoryItem}>
                                Diversen
                            </span>
                            <Image className={styles.categoryImg}
                                   src={soep}
                                   alt=""
                                   height="70px"
                                   width="70px"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Category;
