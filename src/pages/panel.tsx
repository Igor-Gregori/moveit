import { GetServerSideProps } from "next";
import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompletedChallanges } from "../components/CompletedChallanges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengesProvider } from "../contexts/ChallengeContext";
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from "../styles/pages/Panel.module.css";


interface PanelProps {
  level: number;
  currentExperience: number;
  totalExperience: number;
  challengesCompleted: number;
  email: string;
  username: string;
  photoUrl: string;
}


export default function Panel(props: PanelProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      totalExperience={props.totalExperience}
      challengesCompleted={props.challengesCompleted}
      email={props.email}
      username={props.username}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>

              <Profile username={props.username} photoUrl={props.photoUrl} />
              <CompletedChallanges />
              <Countdown />

            </div>
            <div>

              <ChallengeBox />

            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, totalExperience, challengesCompleted, email, username, photoUrl } = ctx.req.cookies;

  if (email === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/"
      }
    }
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      totalExperience: Number(totalExperience),
      challengesCompleted: Number(challengesCompleted),
      email,
      username,
      photoUrl
    }
  }
}
