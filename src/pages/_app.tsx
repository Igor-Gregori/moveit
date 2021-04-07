import { useRouter } from 'next/router';
import { Sidebar } from '../components/Sidebar';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const route = useRouter();

  const isHome = route.asPath === "/";

  return (
    isHome ?
      <Component {...pageProps} /> :
      <>
        <Sidebar />
        <Component {...pageProps} />
      </>

  )
}

export default MyApp