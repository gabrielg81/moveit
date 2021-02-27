import {createContext, useState, ReactNode, useEffect} from 'react';

import challenges from '../../challenges.json';

import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/levelUpModal';

interface Challenge {
    type: 'body;'|'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    startNewChallenge: () => void;
    currentExperience:  number;
    challendesCompleted:  number;
    levelUp: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
    
}

interface ChallengesProviderProps {
    children: ReactNode;

    level: number;
    currentExperience: number;
    challendesCompleted: number;
  }

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children,...rest}:ChallengesProviderProps){
    const [level, setLevel]= useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challendesCompleted, setChallendesCompleted] = useState(rest.challendesCompleted ?? 0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const [isLevelUpModalOpen, setIsLevelModalOpen] = useState(false);

    const experienceToNextLevel = Math.pow((level+1)*4,2)

    //Salvar informações no coockies
    useEffect(()=> {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challendesCompleted', String(challendesCompleted));
    }, [level, currentExperience, challendesCompleted]);

    function levelUp(){
      setLevel(level+1);
      setIsLevelModalOpen(true);
    }

    //pedir permissão para enviar notificações para o usuário.
    useEffect(()=> {
        Notification.requestPermission(); 
    }, [])

    function closeLevelUpModal() {
        setIsLevelModalOpen(false);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted'){
            new Notification('Novo desafio!',
            {
                body: `Valendo ${challenge.amount} xp.`,
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallendesCompleted(challendesCompleted +1)
    }

    return (
    <ChallengesContext.Provider value={{
        level,
        startNewChallenge,
        currentExperience,
        challendesCompleted,
        levelUp,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal,
        }}>
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengesContext.Provider>
    )
}