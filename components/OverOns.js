import styles from "../styles/OverOns.module.css"
import {useState} from "react";
import axios from "axios"
const OverOns = ({showModal, setShowModal}) => {
    const [error, setError] = useState(false)
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });


    const handleChange = (e) =>{

        setValue({...value, [e.target.name]: e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            const res = await axios.post("/api/mail",
                value)

              if(res.data.status === "Message Sent"){
                    setIsActive(true)
                    setValue({ voornaam: "",
                        achternaam: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: ""})
                }


        }catch(err){
            err && setError(true)

        }

    }

        //onClick={()=> setShowModal(!showModal)}
    return (

        <div className={styles.container} onClick={()=> setShowModal(!showModal)}>
            <div className={styles.leftWrapper}>
                {!isActive && <div>
                    {error && <h2 style={{color: "red", textAlign: "center"}}>Something went wrong.  Please try again.</h2>}
                    <h1 className={styles.title}>Contact</h1>
                    <form className={styles.contactForm} action="submit">
                        <div className={styles.contactItem}>
                            <label className={styles.contactLabel}>Voornaam</label>
                            <input className={styles.contactInput} type="text" required value={value.firstName} name="firstName"
                                          placeholder="Voornaam" onChange={handleChange}/>
                        </div>
                        <div className={styles.contactItem}>
                            <label className={styles.contactLabel}>Achternaam</label>
                            <input className={styles.contactInput} type="text" required value={value.lastName} name="lastName"
                                          placeholder="Achternaam" onChange={handleChange}/>
                        </div>
                        <div className={styles.contactItem}>
                            <label className={styles.contactLabel}>Email Address</label>
                            <input className={styles.contactInput}
                                type="email"
                                placeholder="Email Address"
                                required
                                value={value.email} name="email" onChange={handleChange}/>
                        </div>
                        <div className={styles.contactItem}>
                            <label className={styles.contactLabel}>Telefoon</label>
                            <input className={styles.contactInput}
                                type="text"
                                placeholder="Telefoon"
                                required
                                value={value.phone} name="phone" onChange={handleChange}/>
                        </div>
                        <div className={styles.contactMessage}>
                            <label className={styles.contactLabel}>Subject</label>
                            <input className={styles.contactInput} type="text" required value={value.subject} name="subject"
                                          placeholder="Subject" onChange={handleChange}/>
                        </div>
                        <div className={styles.contactMessage}>
                            <label className={styles.contactLabel}>Your Message</label>
                            <textarea className={styles.contactTextArea}
                                placeholder="Message"
                                name="message"
                                value={value.message}
                                onChange={handleChange}
                            > </textarea>
                        </div>

                        <button className={styles.contactButton}  onClick={(e)=>handleSubmit(e)}>SUBMIT</button>
                    </form>
                </div>}
                {isActive &&
                    <div className={styles.success}><h1 style={{textAlign: "center"}}>Bedankt!!  Je bericht is verzonden.</h1></div>}
            </div>
            <div className={styles.rightWrapper} >

                <p>
                    Omdat er in Chaam geen fatsoenlijk stukje vlees te verkrijgen is ben ik daarin voor mezelf begonnen.
                    Ik ben slager van beroep met ruim 30 jaar ervaring.
                    Ik maak ook heerlijke ambachtelijke soepen,kant en klare kipsaté en kant en klare hachee 😋<br/>

                    Ook voor al uw BBQ vlees/vis kunt u bij mij terecht.
                    Van gemarineerde speklapjes tot scampi&apos;s.
                    Van kipsaté tot hamburgers.
                    Van biefstuk spiesen tot zalm spiesen.
                    Van varkenshaas spiesen tot Caribische kipsnitzels.
                    Van oosterse kipdijen tot varkensfilet chilly.
                    Ook voor de grote stukken vlees zoals;

                    Kortom,u kunt ALLES bestellen bij mij !
                </p>
            </div>
        </div>

    );
};

export default OverOns;
