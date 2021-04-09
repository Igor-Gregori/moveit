import { Router, useRouter } from 'next/router';
import { Sidebar } from '../components/Sidebar';
import NProgress from 'nprogress'
import '../styles/global.css';
import '../styles/nprogress.css';

Router.events.on('routeChangeStart', (url) => {
  console.log(url);
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

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