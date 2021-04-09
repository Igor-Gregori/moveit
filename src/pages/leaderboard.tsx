import axios from "axios";
import { GetServerSideProps } from "next";
import Image from "next/image";
import styles from "../styles/pages/Leaderboard.module.css";

export default function Leaderboard(props) {
    const pessoas = props.result;

    return (
        <div className={styles.container}>
            <h1>Leaderboard</h1>

            <table className={styles.table}>
                <tr className={styles.titleTable}>
                    <th>POSIÇÃO</th>
                    <th className={styles.thUser}>USUÁRIO</th>
                    <th className={styles.thChallenges}>DESAFIOS</th>
                    <th className={styles.thExperience}>EXPERIÊNCIA</th>
                </tr>
                <br />
                {pessoas.map((pessoa, index) => (
                    <tr>
                        <div className={styles.divLine}>
                            <td className={styles.tdPosition}><strong>{index + 1}</strong></td>
                            <td className={styles.tdUser}>
                                <div className={styles.divUser}>
                                    <Image className={styles.userImage} src={pessoa.photoURL} alt={pessoa.username} width={64} height={64} />
                                    <div className={styles.userInfo}>
                                        <h3>{pessoa.username}</h3>
                                        <div className={styles.divLevel} >
                                            <Image className={styles.levelImage} src="/icons/level.svg" alt="Level" width={15} height={15} />
                                            <p>&nbsp;&nbsp;Level {pessoa.level}</p>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className={styles.tdChallenges}>
                                <div className={styles.divChallenges}>
                                    <h4>{pessoa.challenges}</h4><p>&nbsp;completados</p>
                                </div>
                            </td>
                            <td className={styles.tdExperience}>
                                <div className={styles.divExperience}>
                                    <h4>{pessoa.experience}</h4><p>&nbsp;xp</p>
                                </div>
                            </td>
                        </div>
                    </tr>
                ))}


            </table>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {

    const leaderboard = await axios.get(`${process.env.BASE_URL}/api/leaderboard`);

    const result = leaderboard.data;

    return { props: { result } }
}
