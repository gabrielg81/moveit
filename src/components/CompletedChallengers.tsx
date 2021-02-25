import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallengers.module.css';

export function CompletedChallengers() {

    const {challendesCompleted}= useContext(ChallengesContext); 

    return (
        <div className={styles.completedChallengersContainer}>
            <span>Desafios Completos</span>
            <span>{challendesCompleted}</span>
        </div>
    );
}