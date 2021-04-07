import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
    const router = useRouter();

    function exitMoveIt() {
        Cookies.remove('level');
        Cookies.remove('currentExperience');
        Cookies.remove('challengesCompleted');
        Cookies.remove('email');
        Cookies.remove('username');
        Cookies.remove('photoUrl');
        router.push('/');
    }

    return (
        <div className={styles.sidebar}>
            <div className={styles.imgLogo}>
                <img src="/logo.svg" alt="Moveit logo" />
            </div>

            <div className={styles.main}>

                <button className={(router.pathname === "/panel") ? styles.buttonClicked : styles.buttonNonClicked}
                    onClick={() => router.push('/panel')}>
                    <img src="/icons/home.svg" alt="Painel" />
                </button>

                <br /><br />

                <button className={(router.pathname === "/leaderboard") ? styles.buttonClicked : styles.buttonNonClicked}
                    onClick={() => router.push('/leaderboard')}>
                    <img src="/icons/award.svg" alt="Leaderboard" />
                </button>

            </div>

            <div className={styles.footer}>
                <button type="button" onClick={exitMoveIt}>
                    <img src="/icons/logout.svg" alt="Sair" />
                </button>
            </div>
        </div>
    )
}
