import axios from 'axios';
import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { githubProvider } from '../configs/authenticationMethod';
import socialMediaAuth from '../service/authentication';
import styles from '../styles/pages/FistPage.module.css';


export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);


  const handleProviderLogin = async (provider) => {
    setIsLoading(true);

    const { email, displayName, photoURL } = await socialMediaAuth(provider);

    const user = await axios.post('/api/subscribe', { email, displayName, photoURL });

    Cookies.set('level', String(user.data.level));
    Cookies.set('currentExperience', String(user.data.experience));
    Cookies.set('challengesCompleted', String(user.data.challenges));
    Cookies.set('email', String(user.data.email));
    Cookies.set('username', String(user.data.username));
    Cookies.set('photoUrl', String(user.data.photoURL));

    router.push('/panel');
    
    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Move.it</title>
      </Head>

      <div className={styles.divLogo}>
        <img src="/icons/logo.svg" width="100" />
      </div>
      <div className={styles.divLogin}>
        <div className={styles.logoMoveit}>
          <img src="/logo-full.svg" />
        </div>
        <div className={styles.divInfo}>
          <p>Bem-vindo</p>
          <br />
          <div className={styles.githubInfo}>
            <img src="/icons/github.svg" />
            <p>Faça login com seu Github para começar</p>
          </div>
          <br />
          {isLoading ?
            <button type="button"><img src="/loading.gif" /></button>
            :
            <button type="button" onClick={() => { handleProviderLogin(githubProvider) }}>Fazer login com github <img src="/icons/github.svg" /></button>
          }
        </div>
      </div>
    </div>
  );
}
