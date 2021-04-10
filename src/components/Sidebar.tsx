import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import styles from '../styles/components/Sidebar.module.css';

export function Sidebar() {
    const router = useRouter();

    function exitMoveIt() {
        Cookies.remove('level');
        Cookies.remove('currentExperience');
        Cookies.remove('totalExperience');
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
                    <svg className={styles.svgTest} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke={(router.pathname === "/panel") ? "#4953b8" : "#ACACAD"} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 29.3333V16H20V29.3333" stroke={(router.pathname === "/panel") ? "#4953b8" : "#ACACAD"} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

                <br /><br />

                <button className={(router.pathname === "/leaderboard") ? styles.buttonClicked : styles.buttonNonClicked}
                    onClick={() => router.push('/leaderboard')}>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0001 20C21.1547 20 25.3334 15.8214 25.3334 10.6667C25.3334 5.51205 21.1547 1.33337 16.0001 1.33337C10.8454 1.33337 6.66675 5.51205 6.66675 10.6667C6.66675 15.8214 10.8454 20 16.0001 20Z" stroke={(router.pathname === "/leaderboard") ? "#4953b8" : "#ACACAD"} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.9466 18.52L9.33325 30.6667L15.9999 26.6667L22.6666 30.6667L21.0533 18.5067" stroke={(router.pathname === "/leaderboard") ? "#4953b8" : "#ACACAD"} stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

            </div>

            <div className={styles.footer}>
                <button type="button" onClick={exitMoveIt}>
                    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 31.5L7.5 31.5C6.70435 31.5 5.94129 31.1839 5.37868 30.6213C4.81607 30.0587 4.5 29.2956 4.5 28.5L4.5 7.49999C4.5 6.70434 4.81607 5.94128 5.37868 5.37867C5.94129 4.81606 6.70435 4.49999 7.5 4.49999L13.5 4.49999" stroke="#5965E0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21 10.5L13.5 18L21 25.5" stroke="#5965E0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="#teste" d="M13.5 18L31.5 18" stroke="#5965E0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
