import { CompletedChallengers } from '../components/CompletedChallengers';

import {GetServerSideProps} from 'next';

import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.css';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challendesCompleted: number;
}

export default function Home(props:HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challendesCompleted={props.challendesCompleted}
    >

<div className={styles.container}>
        <Head>
          <title>Moveit - G81</title>
        </Head>
          <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallengers />
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


export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challendesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challendesCompleted: Number(challendesCompleted),
    }
  }
}