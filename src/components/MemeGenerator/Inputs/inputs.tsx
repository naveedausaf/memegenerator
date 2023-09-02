import styles from './inputs.module.scss';


interface InputsProps {
    firstPhrase?: string,
    secondPhrase?: string,
    onFirstPhraseChange: (newFirstPhrase: string) => void,
    onSecondPhraseChange: (newSecondPhrase: string) => void
}

const Inputs = ({ firstPhrase, secondPhrase, onFirstPhraseChange, onSecondPhraseChange }: InputsProps) => {

    return (
        <div className={styles.inputsContainer}>
            <input type="text" className={styles.textbox} value={firstPhrase} onChange={e => { onFirstPhraseChange(e.target.value) }} />
            <input type="text" className={styles.textbox} value={secondPhrase} onChange={e => { onSecondPhraseChange(e.target.value) }} />
        </div>
    );
}

export default Inputs;