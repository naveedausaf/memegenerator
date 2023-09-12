/* eslint-disable @next/next/no-img-element */
import styles from './memegenerator.module.scss'
import Button, { MemeObject } from './Button/button';
import Inputs from './Inputs/inputs';
import Header from '../Header/header';
import Meme from './Meme/meme';

import { useState, useEffect, SyntheticEvent, useRef } from 'react';


const MemeGenerator = () => {
    const [memeObject, setMemeObject] = useState<MemeObject>();
    const [firstPhrase, setFirstPhrase] = useState<string>();
    const [secondPhrase, setSecondPhrase] = useState<string>();


    return (


        <div className={styles.outercontainer}>
            <div className={styles.container} >
                <Inputs onFirstPhraseChange={setFirstPhrase} onSecondPhraseChange={setSecondPhrase} />
                <Button onMemeChange={setMemeObject} />
                <Meme firstPhrase={memeObject && firstPhrase} secondPhrase={memeObject && secondPhrase} memeImageUrl={memeObject?.url} memeImageAltText={memeObject?.name} />
            </div >
        </div>

    );
}

export default MemeGenerator;