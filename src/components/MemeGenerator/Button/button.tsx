import styles from './button.module.scss'
import memes, { MemeObject } from '../../../data/memesData'

interface ButtonProps {
    onMemeChange: (newMeme: MemeObject) => void
}
const Button = ({ onMemeChange }: ButtonProps) => {
    const getRandomMemeIndex = () => {
        return Math.floor(Math.random() * (memes.data.memes.length));

    }

    const getNewMeme = () => memes.data.memes[getRandomMemeIndex()];

    return (
        <button className={styles.button} onClick={e => { onMemeChange(getNewMeme()) }}>Get a new meme image 🖼</button>
    );
}

export default Button;
export type { MemeObject };

