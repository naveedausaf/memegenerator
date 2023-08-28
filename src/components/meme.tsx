/* eslint-disable @next/next/no-img-element */
import styles from './meme.module.scss'
import memes from '../data/memesData'
import Image from 'next/image'
import { useState, useEffect, MouseEvent, SyntheticEvent, useRef } from 'react';

interface MemeProps {
    /**
     * First of two phrase to use in meme generation
     */
    firstPhrase?: string,
    /**
     * Second of two phrases to use in meme generation
     */
    secondPhrase?: string
}

const Meme = ({ firstPhrase, secondPhrase }: MemeProps) => {
    const getRandomMemeIndex = () => {
        return Math.floor(Math.random() * (memes.data.memes.length));

    }
    const [memeIndex, setMemeIndex] = useState(getRandomMemeIndex());


    const memeTextContainer = useRef<HTMLDivElement>(null);
    const memeImageContainer = useRef<HTMLImageElement>(null);

    function handleClick(event: MouseEvent<HTMLButtonElement>): void {
        setMemeIndex(getRandomMemeIndex());
    }

    const memeObject = memes.data.memes[memeIndex];

    function resizeTextOverlay() {
        memeTextContainer.current!.style.width = memeImageContainer.current!.clientWidth + "px";

        memeTextContainer.current!.style.height = memeImageContainer.current!.clientHeight + "px";

        //debugger;
        memeTextContainer.current!.style.top = memeImageContainer.current!.getBoundingClientRect().top + "px";

        memeTextContainer.current!.style.left = memeImageContainer.current!.getBoundingClientRect().left + "px";
    }


    function handleResize(event: SyntheticEvent<HTMLElement, Event>): void {

        //Need to do this gimmickry because the given
        //Figma layout was not responsive. So I
        //made the image centre itself if width
        //available was greater than its maximum width
        //I then couldn't make the meme text fid overlay
        //size itself to the (dynamic) size of the image
        //using CSS.
        //debugger;

        resizeTextOverlay();


    }

    useEffect(() => {

        function handleResize() {

            resizeTextOverlay();



        }

        window.addEventListener('resize', handleResize)

        //should return the cleanup function
        //to remove the event handler.
        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);//empty `[]` ensures the passed func only runs on mount

    return (
        <main className={styles.container}>
            <div className={styles.inputsContainer}>
                <input type="text" name="firstPhrase" className={styles.textbox} />
                <input type="text" className={styles.textbox} name="secondPhrase" />
            </div>
            <button className={styles.button} onClick={handleClick}>Get a new meme image 🖼</button>
            <div className={styles.meme} onLoad={handleResize}
                onClick={handleResize}>
                <img src={memeObject.url} alt={memeObject.name}
                    className={styles.meme__image}
                    ref={memeImageContainer}
                />
                <div ref={memeTextContainer} className={styles.meme__textcontainer}>
                    <span>Shut up

                    </span>

                    <span>and take my money
                    </span>
                </div>
            </div>
        </main>
    );

}

export default Meme;