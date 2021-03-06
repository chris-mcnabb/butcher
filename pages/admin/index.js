import styles from "../../styles/Login.module.css"
import React, {useState, useEffect} from 'react';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';
import axios from "axios";
import Head from "next/head";
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()
    useEffect(() => {
        getSession().then((session) => {

            if (session) {
                router.replace('/admin/products');
            } else {
                setIsLoading(false);
            }
        });
    }, [router]);
    if (isLoading) {
        return <p>Loading...</p>;
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try{
            const res = await signIn('credentials', {
                redirect: false,
                username:  username,
                password:   password,


            });
            !res.error && await router.push("/admin/products")
        }catch(err){
            console.log(err)
        }


    }

    return (
        <>

            <div className={styles.container}>
                <Head>
                    <title>De Mobiele Slager</title>
                    <meta name="Chaam, NL Slager" content="Generated by me, Chaam, NL Slager" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&family=Rock+Salt&family=Sansita+Swashed:wght@500;600;700;800;900&display=swap" rel="stylesheet"/>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className={styles.title}>De Mobiele Slager</h1>
                <form className={styles.formContainer} action="submit">
                    <input className={styles.inputs} type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
                    <input className={styles.inputs} type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button className={styles.button} onClick={handleClick}>Login</button>
                </form>
            </div>


        </>
    );
};


export const getInitialProps = async () => {
    const res = await axios.get(process.env.VERCEL_URL+"/api/products");
    const message = await axios.get(process.env.VERCEL_URL+"/api/mail");
    return {
        props: {
            products: res.data,
            messages: message.data
        }
    }
}


export default Login;

