import {createContext, useState, ReactNode, useEffect} from 'react';

import challenges from '../../challenges.json';

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
    
}

interface ChallengesProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({children}:ChallengesProviderProps){
    const [level, setLevel]= useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challendesCompleted, setChallendesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level+1)*4,2)

    function levelUp(){
      setLevel(level+1)
    }

    //pedir permissão para enviar notificações para o usuário.
    useEffect(()=> {
        Notification.requestPermission(); 
    }, [])

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
        }}>
      {children}
    </ChallengesContext.Provider>
    )
}